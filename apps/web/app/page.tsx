"use client";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";
import { Layout } from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function Home() {
  const session = useSession();
  return (
    <Layout>
      <div className="w-screen flex flex-col items-center">
        <Hero />
        <HeroVideo />
      </div>
    </Layout>
  );
}
