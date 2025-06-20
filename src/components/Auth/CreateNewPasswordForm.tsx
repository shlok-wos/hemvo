"use client";
import { Button, Input } from "@/components";
import { useUserCreateNewPasswordHook } from "@/hooks/user/auth/createNewPassword.hook";
import { ArrowRight, Password } from "@phosphor-icons/react/dist/ssr";

export const CreateNewPasswordForm = () => {
  const { newPasswordData, errorMessage, handleInputChange, onSubmit } =
    useUserCreateNewPasswordHook();

  return (
    <>
      <h1 className="fw-bolder text-4xl space-2xs-mb">
        Skapa ett nytt lösenord
      </h1>
      <div className="row gy-2">
        <div className="col-12">
          <Input    
            id="newPassword"
            type="password"
            name="newPassword"
            label="Ange nytt lösenord *"
            placeholder="Ange lösenord"
            icon={<Password weight="duotone" size={20} />}
            parentClassName="mb-2 mb-xl-3"
            errorMessage={errorMessage?.newPassword}
            value={newPasswordData?.newPassword}
            onChange={handleInputChange}
            autoFocus
          />
        </div>
        <div className="col-12">
          <Input
            id="confirmNewPassword"
            type="password"
            name="confirmPassword"
            label="Bekräfta lösenord *"
            placeholder="Bekräfta lösenord"
            icon={<Password weight="duotone" size={20} />}
            parentClassName="mb-2 mb-xl-3"
            errorMessage={errorMessage?.confirmPassword}
            value={newPasswordData?.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <Button
        icon={<ArrowRight weight="duotone" size={20} />}
        iconPosition="end"
        className="mt-5"
        full
        onClick={onSubmit}
      >
        Skapa lösenord
      </Button>
    </>
  );
};
