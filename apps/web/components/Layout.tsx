import React from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-[#FEFCF8]">
      <Navbar />
      {children}
    </div>
  );
};
