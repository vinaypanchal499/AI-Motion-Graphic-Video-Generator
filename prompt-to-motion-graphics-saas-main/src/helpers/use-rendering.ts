"use client";

import { compileCode } from "@/remotion/compiler";
import { renderMediaOnWeb } from "@remotion/web-renderer";
import type { WebRendererVideoCodec } from "@remotion/web-renderer";
import { useCallback, useMemo, useRef, useState } from "react";
import { z } from "zod";
import { CompositionProps } from "../../types/constants";

export type State =
  | {
      status: "init";
    }
  | {
      status: "rendering";
      progress: number;
    }
  | {
      status: "error";
      error: Error;
    }
  | {
      url: string;
      size: number;
      status: "done";
    };

type RenderConfig = {
  container: "mp4" | "webm";
  videoCodec: WebRendererVideoCodec;
  hardwareAcceleration: "no-preference" | "prefer-hardware" | "prefer-software";
};

const RENDER_CONFIGS: RenderConfig[] = [
  { container: "mp4", videoCodec: "h264", hardwareAcceleration: "prefer-hardware" },
  { container: "mp4", videoCodec: "h264", hardwareAcceleration: "prefer-software" },
  { container: "webm", videoCodec: "vp9", hardwareAcceleration: "prefer-software" },
];

const isEncoderError = (err: unknown): boolean => {
  if (!(err instanceof Error)) return false;
  const msg = err.message.toLowerCase();
  return (
    msg.includes("encoder") ||
    msg.includes("codec") ||
    msg.includes("not supported") ||
    msg.includes("avc1") ||
    msg.includes("hardware acceleration")
  );
};

export const useRendering = (inputProps: z.infer<typeof CompositionProps>) => {
  const [state, setState] = useState<State>({
    status: "init",
  });

  // Use a ref to track the latest setState to avoid stale closures
  const setStateRef = useRef(setState);
  setStateRef.current = setState;

  const renderMedia = useCallback(async () => {
    setStateRef.current({
      status: "rendering",
      progress: 0,
    });

    try {
      // Compile the code string into a React component
      const { Component, error } = compileCode(inputProps.code);

      if (error || !Component) {
        setStateRef.current({
          status: "error",
          error: new Error(error || "Failed to compile animation code"),
        });
        return;
      }

      const composition = {
        id: "web-render-composition",
        component: Component,
        durationInFrames: inputProps.durationInFrames,
        fps: inputProps.fps,
        width: 1920,
        height: 1080,
      };

      let lastError: Error | null = null;

      for (const config of RENDER_CONFIGS) {
        try {
          const result = await renderMediaOnWeb({
            composition,
            container: config.container,
            videoCodec: config.videoCodec,
            videoBitrate: "medium",
            hardwareAcceleration: config.hardwareAcceleration,
            onProgress: ({ progress }) => {
              setStateRef.current({
                status: "rendering",
                progress: progress ?? 0,
              });
            },
          });

          const blob = await result.getBlob();
          const url = URL.createObjectURL(blob);

          setStateRef.current({
            status: "done",
            url,
            size: blob.size,
          });
          return;
        } catch (err) {
          lastError = err instanceof Error ? err : new Error("Render failed");

          // Only retry if it's an encoder/codec compatibility error
          if (!isEncoderError(err)) {
            throw lastError;
          }
          // Continue to next config
        }
      }

      // All configs failed
      setStateRef.current({
        status: "error",
        error: lastError || new Error("All render configurations failed"),
      });
    } catch (err) {
      setStateRef.current({
        status: "error",
        error: err instanceof Error ? err : new Error("Render failed"),
      });
    }
  }, [inputProps]);

  const undo = useCallback(() => {
    // Revoke the object URL to free memory
    if (state.status === "done") {
      URL.revokeObjectURL(state.url);
    }
    setState({ status: "init" });
  }, [state]);

  return useMemo(() => {
    return {
      renderMedia,
      state,
      undo,
    };
  }, [renderMedia, state, undo]);
};
