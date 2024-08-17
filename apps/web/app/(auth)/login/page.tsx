import { LinkButton } from "@/components/buttons";
import { ZapierLogo } from "@repo/ui/component";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex">
      {/* app bar */}
      <div className="sticky top-0 flex items-center justify-between w-screen h-[70px] border-b-[1px] border-[#dfddd2] px-[100px]">
        <ZapierLogo />
        <Link href={"/signup"}>
          <button
            style={{
              width: "100px",
              height: "30px",
            }}
            className={
              "flex justify-center items-center bg-[#FF4F01] dark-shadow  text-white  rounded-full ml-[10px]"
            }
          >
            Sign up
          </button>
        </Link>
      </div>
      {/* content */}
      <div className="flex flex-col ">
        <div>
          <div></div>
          {/* form */}
          <div></div>
        </div>
        {/* companies trust */}
        <div></div>
      </div>
    </div>
  );
};

export default Login;
