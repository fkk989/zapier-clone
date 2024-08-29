"use client";
import React from "react";
import { Form } from "@repo/ui/component";
import { signUpFomrSchema } from "@/utils/formSchema";
import { GithubLogin, GoolgeLogin } from "../buttons";
import { userSignup } from "@/hooks";

//
export const SignUpForm = () => {
  return (
    <Form.Root
      className=" w-[400px]  flex flex-col items-center gap-[20px] border-[#dfddd2] border-[1px] rounded-md py-[20px]"
      onSubmit={userSignup}
      schema={signUpFomrSchema}
    >
      <GoolgeLogin
        text="Signup with google"
        style={{ width: "90%", height: "50px" }}
      />
      <GithubLogin style={{ width: "90%" }} text="Signup with github" />
      <div className="w-[90%] flex items-center gap-[10px]">
        <span className="w-[100%] h-[1px] bg-[#dfddd2]"></span>
        <span className="flex-1 text-[#403F3E] font-[500]">or</span>
        <span className="w-[100%] h-[1px] bg-[#dfddd2]"></span>
      </div>
      <div className="w-[90%] flex flex-col gap-[25px]">
        <Form.Content />
      </div>
      <Form.Submit
        loader={
          <div className="w-full h-full flex justify-center items-center bg-[#FF4F01] hover:bg-[#d03f01] text-[18px] font-[500]  text-white  rounded-full  transition-all duration-200 ease-out">
            <div className="w-[30px] h-[30px] border-[5px] border-white animate-spin rounded-full"></div>
          </div>
        }
        className=" bottom-[10px] w-[90%] h-[50px] mt-[50px]"
      >
        <div
          className={
            "w-full h-full flex justify-center items-center bg-[#FF4F01] hover:bg-[#d03f01] text-[18px] font-[500]  text-white  rounded-full  transition-all duration-200 ease-out"
          }
        >
          Get started with email
        </div>
      </Form.Submit>
    </Form.Root>
  );
};
