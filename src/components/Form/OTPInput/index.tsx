"use client";
import { useState } from "react";
import OTP from "react-otp-input";
import styles from "../Form.module.css";

export const OTPInput: React.FC<any> = ({ label, errorMessage, ...rest }: OTPInputProps) => {
  const [otp, setOtp] = useState("");

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <OTP
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputStyle={styles.otpInput}
        containerStyle={{
          gap: 10,
        }}
        inputType="number"
        placeholder="-"
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus
        {...rest}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </>
  );
};

interface OTPInputProps {
  label?: string;
  onChange?: any;
  value?: any;
  errorMessage?: string;
}
