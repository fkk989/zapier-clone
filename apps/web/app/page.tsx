"use client";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";
import { Layout } from "@/components/Layout";
import { IoIosCheckmark } from "react-icons/io";
//
export default function Home() {
  return (
    <Layout>
      <div className="w-screen flex flex-col items-center">
        <Hero />
        {/*  */}
        <div className="flex items-center gap-[30px] mt-[50px] mb-[20px] text-[#463b39da]">
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[2px]">
              <IoIosCheckmark className="text-[30px]" />
              <span className=" font-bold text-black ">Free forever</span>
            </div>
            for core features
          </div>
          {/*  */}
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[2px]">
              <IoIosCheckmark className="text-[30px]" />
              <span className=" font-bold text-black ">More apps</span>
            </div>
            than any other platform
          </div>
          {/*  */}
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[2px]">
              <IoIosCheckmark className="text-[30px]" />
              <span>Cuting edge</span>
            </div>
            <span className=" font-bold text-black ">AI features</span>
          </div>
        </div>
        <HeroVideo />
      </div>
    </Layout>
  );
}
