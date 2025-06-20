import {
  Envelope,
  FloppyDisk,
  LineSegment,
  LineVertical,
  User,
} from "@phosphor-icons/react";
import { Button, Input } from "@/components";
import { PhoneInput } from "../PhoneInput";

import { useSettingsHook } from "@/hooks/user/settings.hook";

export const ContactDetailForm = () => {
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
    <>
      <form>
        <div className="row gy-3">
          <div className="col-md-6">
            <Input
              id="firstName"
              label="Förnamn*"
              name="firstName"
              placeholder="Ange ditt förnamn"
              icon={<User weight="duotone" size={22} />}
              errorMessage={errorMessage?.firstName}
              value={userData?.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <Input
              id="lastname"
              name="lastName"
              label="Efternamn *"
              placeholder="Ange ditt efternamn"
              icon={<User weight="duotone" size={22} />}
              errorMessage={errorMessage?.lastName}
              value={userData?.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <Input
              id="email"
              name="email"
              label="E-post *"
              placeholder="Ange din e-postadress"
              type="email"
              icon={<Envelope weight="duotone" size={22} />}
              errorMessage={errorMessage?.email}
              value={userData?.email}
              disabled
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <PhoneInput
              type="number"
              name={"phoneNumber"}
              label="Telefonnummer"
              placeholder="Välj landskod och telefonnummer"
              selectedCountry={userData?.phoneCode}
              onCountryChange={handleOnChangeCountryCode}
              value={userData?.phoneNumber}
              errorMessage={errorMessage?.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </>
  );
};
