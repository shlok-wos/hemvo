import { LoginForm } from "@/components/Auth/loginForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"login | Hemvo"
}

export default function Login() {
  return (
    <div>
      <LoginForm/>
    </div>
  );
}
