"use client";
import { ReactFlowContextProvider } from "@/context";
import { ReactFlowProvider } from "@xyflow/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <ReactFlowContextProvider>{children}</ReactFlowContextProvider>
      </SessionProvider>
    </>
  );
};
