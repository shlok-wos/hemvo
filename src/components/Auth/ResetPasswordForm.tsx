"use client";
import { LivingRoom } from "@/assets/images";
import { Button, Input } from "@/components";
import { ArrowRight, Envelope } from "@phosphor-icons/react/dist/ssr";
import { cx } from "class-variance-authority";
import { useResetPasswordHook } from "@/hooks/user/auth/resetPassword.hook";
import styles from "../Auth/Auth.module.css";


export const ResetPasswordForm = () => {
    const { resetPasswordData, errorMessage, handleInputChange, onVerifyEmail } = useResetPasswordHook();
    return (
        <div>
            <div className="text-center mb-4">
                <h1 className="mb-2 text-2xl">Återställ lösenord</h1>
                <p className="text-gray">Ange din e-postadress så skickar vi en återställningslänk.</p>
            </div>
            <div className={cx(styles.userProfileImage, "ratio ratio-1x1 mx-auto")}>
                <img src={LivingRoom.src} alt="User profile" className="rounded-circle" />
            </div>
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
            </form>
        </div>
    );
}
