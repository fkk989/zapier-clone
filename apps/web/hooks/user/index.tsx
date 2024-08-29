import { useRouter } from "next/navigation";

export async function userSignup(data: any) {
  const navigate = useRouter();
  console.log(data);
  const res = await fetch("/api/v1/user", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await res.json();
  if (resData?.success === true) {
    navigate.push("/login");
  }
}
