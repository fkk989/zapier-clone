"use client";
import React from "react";
import { ZapierLogo } from "@repo/ui/component";
import { FiGlobe } from "react-icons/fi";
import { Dropdown } from "./dropdowns";
import { LinkButton } from "./buttons";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export const Navbar = () => {
  const navigate = useRouter();
  return (
    <div className="sticky top-0">
      {/* TODO: add  a promotion bar over navbar */}
      <div className="relative flex items-center w-screen h-[55px] border-b-[1px] border-[#dfddd2] px-[40px]">
        <ZapierLogo />
        {/* nav links */}
        <div className="flex items-center w-full justify-between  px-[15px] gap-[7px]">
          <div className="flex items-center">
            <Dropdown
              title="Product"
              component={
                <div className="absolute top-[55px] left-0 w-screen h-[400px] bg-black"></div>
              }
            />
            <Dropdown
              title="Solutions"
              component={
                <div className="absolute top-[55px] left-0 w-screen h-[400px] bg-blue-700"></div>
              }
            />
            <Dropdown
              title="Resources"
              component={
                <div className="absolute top-[55px] left-0 w-screen h-[400px] bg-red-700"></div>
              }
            />
            <LinkButton title="Enterprise" />
            <LinkButton title="Pricing" />
          </div>

          <div className="flex items-center">
            <LinkButton
              iconBefore={
                <FiGlobe className="text-[#463b39da] text-[25px] bg-transparent" />
              }
              title="Explore integrations"
            />
            <LinkButton title="Contact sales" />
            <LinkButton title="Login" href="/app/login" />
            <button
              style={{
                width: "100px",
                height: "30px",
              }}
              onClick={() => {
                navigate.push("/signup");
              }}
              className={
                "flex justify-center items-center bg-[#FF4F01] dark-shadow  text-white  rounded-full ml-[10px]"
              }
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
