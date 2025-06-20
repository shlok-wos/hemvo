"use client";
import { Button, Card, Input, Loader } from "@/components";
import { ContactDetailForm } from "@/components/Form/ContactDetailForm";
import { useSettingsHook } from "@/hooks/user/settings.hook";
import { FloppyDisk, Password } from "@phosphor-icons/react";

export const Settings = () => {
  const {
    isLoader,
    userData,
    errorMessage,
    passwordData,
    passwordErrorMessage,
    handleInputChange,
    onSubmit,
    handlePasswordChange,
    onSubmitPassword,
    handleOnChangeCountryCode,
  } = useSettingsHook();
  return (
    <div>
      <Loader show={isLoader} />
      <Card className="mb-3 mb-xl-4">
        <h2 className="text-xl mb-3 mb-sm-4">Kontaktuppgifter </h2>
        <ContactDetailForm />
      </Card>

      <Card>
        <h2 className="text-xl mb-3 mb-sm-4">Byt lösenord</h2>

        <form>
          <div className="row gy-3">
            <div className="col-md-6">
              <Input
                id="password"
                label="Nuvarande lösenord*"
                name="oldPassword"
                type="password"
                placeholder="Ange lösenord"
                icon={<Password weight="duotone" size={22} />}
                errorMessage={passwordErrorMessage?.oldPassword}
                value={passwordData?.oldPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="col-md-6">
              <Input
                type="password"
                id="newPassword"
                name="newPassword"
                label="Nytt lösenord *"
                placeholder="Ange nytt lösenord"
                icon={<Password weight="duotone" size={22} />}
                errorMessage={passwordErrorMessage?.newPassword}
                value={passwordData?.newPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="col-12 d-flex justify-content-end"></div>
          </div>
        </form>
      </Card>
      <div className="text-center space-xs-mt space-xs-mb">
        <Button
          icon={<FloppyDisk weight="duotone" size={20} />}
          iconPosition="end"
          onClick={onSubmitPassword}
        >
          Spara
        </Button>
      </div>
    </div>
  );
};
