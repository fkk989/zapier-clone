import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="w-screen h-screen flex flex-col gap-[20px] justify-center items-center ">
        <h1 className="text-[60px] font-bold">Not found</h1>
        <Link href={"/"}>
          <button
            style={{
              width: "200px",
              height: "30px",
            }}
            className={
              "flex justify-center items-center bg-[#FF4F01] dark-shadow  text-white  rounded-full ml-[10px]"
            }
          >
            Back to safety
          </button>
        </Link>
      </div>
    </Layout>
  );
}
