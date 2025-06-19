import { VerifyCodeForm } from "@/components/Auth/VerifyCodeForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"verify code | Hemvo"
}

export default function VerifyCode() {
  return (
    <div>
      <VerifyCodeForm/>
    </div>
  );
}
