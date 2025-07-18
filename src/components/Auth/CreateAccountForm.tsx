"use client";
import { HemvoColored } from "@/assets/images";
import { Button, Input } from "@/components";
import { useUserCreateAccountHook } from "@/hooks/user/auth/createAccount.hook";
import {
  ArrowRight,
  Envelope,
  Password,
  User,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const CreateAccountForm = () => {
  const { authData, errorMessage, handleInputChange, onSubmit } =
    useUserCreateAccountHook();
  return (
    <div>
      <div className="mb-2">
        <img className="auth-logo ratio" src={HemvoColored.src} alt={"logo"} />
      </div>
      <h1 className="fw-bolder text-5xl space-2xs-mb">Skapa ett konto</h1>
      <form>
        <div className="row gy-2">
          <div className="col-md-6">
            <Input
              id="firstName"
              type="text"
              name="firstName"
              label="Namn*"
              placeholder="Fyll i förnamn"
              icon={<User weight="duotone" size={20} />}
              parentClassName="mb-2 mb-xl-3"
              required
              errorMessage={errorMessage?.firstName}
              onChange={handleInputChange}
              value={authData?.firstName}
              autoFocus
            />
          </div>
          <div className="col-md-6">
            <Input
              id="lastName"
              type="text"
              name="lastName"
              label="Efternamn*"
              placeholder="Fyll i efternamn"
              icon={<User weight="duotone" size={20} />}
              parentClassName="mb-2 mb-xl-3"
              errorMessage={errorMessage?.lastName}
              onChange={handleInputChange}
              value={authData?.lastName}
            />
          </div>
          <div className="col-12">
            <Input
              id="registerEmail"
              type="email"
              name="email"
              label="E-postadress*"
              placeholder="Fyll i e-postadress"
              icon={<Envelope weight="duotone" size={20} />}
              parentClassName="mb-2 mb-xl-3"
              iconClassCommon="email-ico-translateY"
              errorMessage={errorMessage?.email}
              onChange={handleInputChange}
              value={authData?.email}
            />
          </div>
          <div className="col-12">
            <Input
              id="registerPassword"
              type="password"
              name="password"
              label="Lösenord*"
              placeholder="Ange lösenord"
              icon={<Password weight="duotone" size={20} />}
              parentClassName="mb-1"
              errorMessage={errorMessage?.password}
              onChange={handleInputChange}
              value={authData?.password}
            />
            {/* <small className="text-gray mt-3 mt-xl-2 d-block">
              Lösenordet måste innehålla minst 8 tecken
            </small> */}
          </div>
        </div>

        <Button
          icon={<ArrowRight weight="duotone" size={20} />}
          iconPosition="end"
          className="mt-4 mt-xl-5"
          full
          onClick={onSubmit}
        >
          Skapa konto
        </Button>

        <small className="mt-3 text-center text-gray d-block">
          Genom att registrera ett konto godkänner du Hemvos{" "}
          <br className="d-sm-none" />
          <Link href={"/terms-and-conditions"} className="link fw-semibold">
            {" "}
            Användarvillkor
          </Link>{" "}
          och&nbsp;
          <Link href={"/privacy-policy"} className="link fw-semibold">
            Integritetspolicy
          </Link>
          .
        </small>

        <small className="mt-5 text-center text-gray d-block">
          Har du redan ett konto?
          <Link href={"/login"} className="link fw-semibold">
            {" "}
            Logga in
          </Link>
        </small>
      </form>
    </div>
  );
};
