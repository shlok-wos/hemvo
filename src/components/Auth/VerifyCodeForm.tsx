"use client";
import { Button, OTPInput } from "@/components";
import Timer from "@/components/Timer";
import { useVerifyOtpHook } from "@/hooks/user/auth/verifyOtp.hook";
import { ArrowRight } from "@phosphor-icons/react";

export const VerifyCodeForm = () => {
  const {
    time,
    resetPasswordData,
    showTimer,
    errorMessage,
    handleInputChange,
    onVerifyEmail,
    sendOTP,
    handleTimerExpire,
  } = useVerifyOtpHook();
  return (
    <div>
      <h1 className="mb-4 text-2xl">Verifiera kod</h1>
      <OTPInput
        label="Ange koden som har skickats till din e-postadress*"
        onChange={handleInputChange}
        value={resetPasswordData?.otp}
      />
      <Button
        // href={"/create-new-password"}
        icon={<ArrowRight weight="duotone" size={20} />}
        iconPosition="end"
        className="mt-4 mt-xl-5"
        full
        // disabled
        onClick={onVerifyEmail}
        disabled={resetPasswordData?.otp?.length !== 6}
      >
        Verifiera kod
      </Button>
      <div className="text-md mx-auto d-block mt-4 bg-transparent border-0 text-center">
        Fick du ingen kod?
        <button
          onClick={sendOTP}
          disabled={showTimer}
          className="link-highlight fw-bold text-decoration-underline bg-transparent border-0"
        >
          Skicka igen
        </button>
        {showTimer && (
          <>
            om <Timer initialTime={120} key={time} onExpire={handleTimerExpire} /> min
          </>
        )}
      </div>
    </div>
  );
}
