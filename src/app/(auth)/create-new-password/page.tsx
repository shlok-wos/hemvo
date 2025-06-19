// "use client";

import { CreateNewPasswordForm } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "create new password | Hemvo"
}

export default function CreateNewPassword() {

  return (
    <div>
      <CreateNewPasswordForm />
    </div>
  );
}
