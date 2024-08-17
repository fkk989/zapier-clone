import React from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export const Hero = () => {
  const navigate = useRouter();
  return (
    <div className=" flex flex-col items-center gap-[20px] text-black mt-[100px]">
      <h1 className="w-[700px] text-[50px] font-[600] text-center leading-[60px]">
        Automate as fast as you can type
      </h1>
      <h1 className="w-[1000px] text-[23px] font-[450] text-center tracking-wider">
        AI gives you automation superpowers, and Zapier puts them to work.
        Pairing AI and Zapier helps you turn ideas into workflows and bots that
        work for you.
      </h1>
      <div className="flex items-center gap-[80px]">
        <button
          type={"submit"}
          style={{
            width: "300px",
            height: "50px",
          }}
          onClick={() => {
            navigate.push("/signup");
          }}
          className={
            "flex justify-center items-center bg-[#FF4F01] hover:bg-[#d03f01] text-[18px] font-[500]  text-white  rounded-full  transition-all duration-200 ease-out"
          }
        >
          Get started with email
        </button>
        <button
          style={{
            width: "300px",
            height: "50px",
          }}
          className={
            "flex justify-center items-center bg-white text-[18px] font-[500]   border-black border-[1px] hover:border-[2px]  rounded-full  transition-all duration-200 ease-out"
          }
        >
          contact saled
        </button>
      </div>
    </div>
  );
};
