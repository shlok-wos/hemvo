import { CreateAccountForm } from "@/components/Auth/CreateAccountForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"create account | Hemvo"
}

export default function CreateAccount() {
  return (
    <div>
      <CreateAccountForm/>
    </div>
  );
}
