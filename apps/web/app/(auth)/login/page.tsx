import { LoginForm } from "@/components/form";
import { ZapierLogo } from "@repo/ui/component";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/next-auth-config";
import { redirect } from "next/navigation";
import { IoIosCheckmark } from "react-icons/io";
import Link from "next/link";
//
const Login = async () => {
  //
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/");
  //
  return (
    <div className="w-screen  flex flex-col justify-center items-center">
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
      <div className="flex flex-col mt-[100px] ">
        <div className="flex justify-between items-center gap-[50px]">
          {/* text info */}
          <div className=" flex flex-col gap-[50px]">
            <h1 className="w-[450px] text-[35px] font-[600]">
              Join millions worldwide who automate their work using Zapier.
            </h1>

            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[10px] text-[20px]">
                <IoIosCheckmark className="w-[18px] h-[18px] text-[15px] text-white bg-[#10884D] rounded-full" />
                Easy setup, no code required
              </div>
              <div className="flex items-center gap-[10px] text-[20px] ">
                <IoIosCheckmark className="w-[18px] h-[18px] text-[15px] text-white bg-[#10884D] rounded-full" />
                Free forever for core features
              </div>
              <div className="flex items-center gap-[10px] text-[20px]">
                <IoIosCheckmark className="w-[18px] h-[18px] text-[15px] text-white bg-[#10884D] rounded-full" />
                14-day trial of premium features & apps
              </div>
            </div>
          </div>
          {/* form */}
          <LoginForm />
        </div>{" "}
        {/* companies trust */}
        <div></div>
      </div>
    </div>
  );
};

export default Login;
