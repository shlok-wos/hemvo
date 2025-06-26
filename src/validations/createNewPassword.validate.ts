import { passwordRegex } from "@/regex";
import { UseResetPasswordErrorType } from "@/types/user.types";

export const validateOnChangePassword = (
  name: string,
  value: any,
  errors: any,
  password: string
) => {
  switch (name) {
    case "newPassword":
      if (value.trim() === null || value.trim() === "" || value === undefined) {
        errors.newPassword = "Detta fält är obligatoriskt";
      } else if (!passwordRegex.test(value)) {
        errors.newPassword =
          "Lösenordet måste innehålla minst en stor bokstav, en liten bokstav, en siffra och ett specialtecken, samt inte ha några mellanslag.";
      } else if (value.length < 6) {
        errors.newPassword = "Lösenordslängden måste vara minst 6 tecken";
      } else if (value.length > 16) {
        errors.newPassword =
          "Lösenordslängden måste vara kortare än eller lika med 16";
      } else {
        delete errors.newPassword;
      }
      break;
    case "confirmPassword":
      if (value.trim() === null || value.trim() === "" || value === undefined) {
        errors.confirmPassword = "Detta fält är obligatoriskt";
      } else if (password !== value) {
        errors.confirmPassword =
          "Lösenordet och bekräfta lösenordet matchar inte";
      } else {
        delete errors.confirmPassword;
      }
      break;
  }
  return errors;
};

export const validateOnSubmitChangePassword = (newPasswordData: any = {}) => {
  let errors: UseResetPasswordErrorType = {};
  const { newPassword, confirmPassword } = newPasswordData;

  if (!newPassword) {
    errors.newPassword = "Detta fält är obligatoriskt";
  } else if (!passwordRegex.test(newPassword)) {
    errors.newPassword =
      "Lösenordet måste innehålla minst en versal, en gemen, en siffra, ett specialtecken och får inte innehålla något mellanslag";
  } else if (newPassword.length < 6) {
    errors.newPassword = "Lösenordslängden måste vara minst 6 tecken";
  } else if (newPassword.length > 16) {
    errors.newPassword =
      "Lösenordslängden måste vara kortare än eller lika med 16";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Detta fält är obligatoriskt";
  } else if (newPassword !== confirmPassword) {
    errors.confirmPassword = "Lösenordet och bekräftande lösenord matchar inte";
  }
  return errors;
};
