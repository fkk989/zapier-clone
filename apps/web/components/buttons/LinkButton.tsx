"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface LinkButtonProp {
  title: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  href?: string;
}

export const LinkButton: React.FC<LinkButtonProp> = (prop) => {
  const navigation = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          prop.href && navigation.push(prop?.href as string);
        }}
        className="text-[14px] text-[#463b39da] flex justify-center items-center gap-[7px]  hover:bg-[#EBE9DF] rounded-md px-[10px] py-[7px]"
      >
        {prop.iconBefore}
        {prop.title}
        {prop.iconAfter}
      </button>
    </div>
  );
};
