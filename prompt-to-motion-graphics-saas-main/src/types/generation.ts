export const MODELS = [
  { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash" },
  { id: "gemma-4-31b-it", name: "Gemini 2.5 Pro" },
  { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash" },
  { id: "gemma-3-27b-it", name: "Gemma 3 27B" },
  { id: "gemma-4-26b-it", name: "Gemma 4 26B" },
  { id: "gemma-4-31b-it", name: "Gemma 4 31B" },
] as const;

export type ModelId = (typeof MODELS)[number]["id"];

export type StreamPhase = "idle" | "reasoning" | "generating";

export type GenerationErrorType = "validation" | "api";
