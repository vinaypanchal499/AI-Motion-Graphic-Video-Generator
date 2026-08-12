import { ErrorDisplay } from "@/components/ErrorDisplay";
import React from "react";

export const ErrorComp: React.FC<{
  message: string;
}> = ({ message }) => {
  return (
    <ErrorDisplay error={message} title="Render Error" variant="card" size="md" />
  );
};
