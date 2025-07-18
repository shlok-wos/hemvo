"use client";
import { HemvoColored, LivingRoom } from "@/assets/images";
import { Button, Input } from "@/components";
import { ArrowRight, Envelope } from "@phosphor-icons/react/dist/ssr";
import { cx } from "class-variance-authority";
import { useResetPasswordHook } from "@/hooks/user/auth/resetPassword.hook";
import styles from "../Auth/Auth.module.css";

export const ResetPasswordForm = () => {
  
  const {router, resetPasswordData, errorMessage, handleInputChange, onVerifyEmail } =
    useResetPasswordHook();
    
  return (
    <div>
       <div className="mb-3">
        <img
          className="auth-logo ratio cursor-pointer"
          src={HemvoColored.src}
          alt={"logo"}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="text-start mb-4">
        <h1 className="fw-bolder text-5xl space-2xs-mb">Återställ lösenord</h1>
        <p className="text-gray">
          Ange din e-postadress så skickar vi en återställningslänk.
        </p>
      </div>
      {/* <div className={cx(styles.userProfileImage, "ratio ratio-1x1 mx-auto")}>
        <img
          src={LivingRoom.src}
          alt="User profile"
          className="rounded-circle"
        />
      </div> */}
      <form>
        <Input
          id="resetEmail"
          type="email"
          name="email"
          label="E-post*"
          placeholder="Fyll i e-postadress"
          icon={<Envelope weight="duotone" size={20} />}
          parentClassName="mb-2 mb-xl-3"
          iconClassCommon="email-ico-translateY"
          errorMessage={errorMessage?.email}
          value={resetPasswordData?.email}
          onChange={handleInputChange}
          autoFocus
        />
        <Button
          icon={<ArrowRight size={20} weight="duotone" />}
          iconPosition="end"
          className="mt-4"
          full
          onClick={onVerifyEmail}
        >
          Skicka länk
        </Button>
        <small className="mt-3 text-center text-gray d-block">Har du redan ett konto?<a class="link fw-semibold" href="/login"> Logga in</a></small>
      </form>
    </div>
  );
};
