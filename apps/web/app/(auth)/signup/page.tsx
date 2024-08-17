"use client";
import { LinkButton } from "@/components/buttons";
import { SignUpForm } from "@/components/form/SignUpForm";
import { ZapierLogo } from "@repo/ui/component";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const navigate = useRouter();
  const session = useSession();

  console.log(session.data?.user.userAuthToken);
  // if (session.data?.user) navigate.push("/");
  return (
    <div className="w-screen  flex flex-col justify-center items-center">
      {/* app bar */}
      <div className="sticky top-0 flex items-center justify-between w-screen h-[70px] border-b-[1px] border-[#dfddd2] px-[100px]">
        <ZapierLogo />
        <LinkButton title="Login" href="/login" />
      </div>
      {/* content */}
      <div className="flex flex-col mt-[100px] ">
        <div className="flex justify-between items-center gap-[50px]">
          <div>
            <h1 className="w-[450px] text-[35px] font-[600]">
              Join millions worldwide who automate their work using Zapier.
            </h1>
          </div>
          {/* form */}
          <SignUpForm />
        </div>{" "}
        {/* companies trust */}
        <div></div>
      </div>
    </div>
  );
};

export default Signup;
