"use client";
import { Button, Input, RotatingRings } from "@/components";
import { useUserLoginHook } from "@/hooks/user/auth/login.hook";
import { ArrowRight, Envelope, Password } from "@phosphor-icons/react/dist/ssr";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams?.get("token");
  const sessionId = searchParams?.get("session_id");

  useEffect(() => {
    if (token) {
      setCookie("_token", token);
      setCookie("authToken", token);
      router.push(`/dashboard/subscription?token=${token}&session_id=${sessionId}`);
    }
  }, [token]);

  const { userData, errorMessage, handleInputChange, onSubmitLogin } =
    useUserLoginHook();
  return (
    <div>
      <div className="text-start space-2xs-mb space-2xs-pb">
        <h1 className=" fw-bolder text-5xl space-2xs-mb ">Logga in</h1>
        <p className="text-md text-gray fw-medium">
          För att logga in hos dibz behöver du ett BankID kopplat till ditt
          personnummer. Om du inte har BankID behöver du kontakta din bank.
        </p>
      </div>

      <form>
        <Input
          id="loginEmail"
          type="email"
          name="email"
          label="E-post*"
          placeholder="Fyll i e-postadress"
          icon={<Envelope weight="duotone" size={20} />}
          parentClassName="mb-2 mb-xl-3"
          iconClassCommon="email-ico-translateY"
          errorMessage={errorMessage?.email}
          value={userData?.email}
          onChange={handleInputChange}
          autoFocus
        />
        <Input
          id="loginPassword"
          type="password"
          name="password"
          label="Lösenord*"
          placeholder="Fyll i lösenord"
          icon={<Password weight="duotone" size={20} />}
          parentClassName="mb-1"
          errorMessage={errorMessage?.password}
          value={userData?.password}
          onChange={handleInputChange}
        />

        <div className="d-flex justify-content-between align-items-center">
          {/* <small className="text-gray">
            The password must contain at least 8 characters
          </small> */}
          <Link
            href={"/reset-password"}
            className="text-sm fw-medium gradient-text ms-auto mt-2"
          >
            Glömt lösenord
          </Link>
        </div>

        <Button
          icon={<ArrowRight size={20} weight="duotone" />}
          iconPosition="end"
          className="mt-4"
          full
          onClick={onSubmitLogin}
        >
          Logga in
        </Button>
        <small className="mt-3 text-center text-gray d-block">
          Har du inget konto?
          <Link href={"/create-account"} className="link fw-semibold">
            {" "}
            Skapa konto
          </Link>
        </small>
      </form>
    </div>
  );
};
