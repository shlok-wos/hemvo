import { ResetPasswordForm } from "@/components/Auth/ResetPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "reset password | Hemvo",
};

export default function Page() {
  return (
    <div>
      <ResetPasswordForm />
    </div>
  );
}
