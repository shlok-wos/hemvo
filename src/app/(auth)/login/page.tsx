import { womanOnGrass } from "@/assets/images";
import { LoginForm } from "@/components/Auth/loginForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "login | Hemvo",
};

export default function Login({ searchParams }: any) {
  const query = searchParams.query;
  
  return (
    <>
      <div>
        <LoginForm />
      </div>
    </>
  );
}
