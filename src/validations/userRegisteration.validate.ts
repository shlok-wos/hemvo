import { emailRegex, nameRegex, passwordRegex } from "@/regex";
import { UserCreateAccountErrorType } from "@/types/user.types";

export const validateOnUserRegistration = (
  name: string,
  value: any,
  errors: any
) => {
  switch (name) {
    case "firstName":
      if (!value) {
        errors.firstName = "Detta fält är obligatoriskt";
      } else if (value.length >= 30) {
        errors.firstName = "Maximalt 30 tecken är tillåtna";
      } else if (!nameRegex.test(value)) {
        errors.firstName = "Endast bokstäver är tillåtna";
      } else {
        delete errors.firstName;
      }
      break;

    case "lastName":
      if (!value) {
        errors.lastName = "Detta fält är obligatoriskt";
      } else if (value.length >= 30) {
        errors.lastName = "Maximalt 30 tecken är tillåtna";
      } else if (!nameRegex.test(value)) {
        errors.lastName = "Endast bokstäver är tillåtna";
      } else {
        delete errors.lastName;
      }
      break;

    case "email":
      if (!value) {
        errors.email = "Detta fält är obligatoriskt";
      } else if (!emailRegex.test(value)) {
        errors.email = "Vänligen ange en giltig e-postadress";
      } else {
        delete errors.email;
      }
      break;

    case "password":
      if (value.trim() === null || value.trim() === "" || value === undefined) {
        errors.password = "Detta fält är obligatoriskt";
      } else if (!passwordRegex.test(value)) {
        errors.password =
          "Lösenordet måste innehålla minst en versal, en gemen, en siffra, ett specialtecken och får inte innehålla något mellanslag";
      } else if (value.length < 6) {
        errors.password = "Lösenordslängden måste vara minst 6 bokstäver";
      } else if (value.length > 16) {
        errors.password =
          "Lösenordslängden måste vara kortare än eller lika med 16";
      } else {
        delete errors.password;
      }
      break;
  }
  return errors;
};

export const validateOnSubmitUserRegistration = (authData: any = {}) => {
  let errors: UserCreateAccountErrorType = {};
  const { firstName, lastName, email, password } = authData;

  if (!firstName) {
    errors.firstName = "Detta fält är obligatoriskt";
  } else if (firstName.length >= 30) {
    errors.firstName = "Maximalt 30 tecken är tillåtna";
  } else if (!nameRegex.test(firstName)) {
    errors.firstName = "Endast bokstäver är tillåtna";
  }

  if (!lastName) {
    errors.lastName = "Detta fält är obligatoriskt";
  } else if (lastName.length >= 30) {
    errors.lastName = "Maximalt 30 tecken är tillåtna";
  } else if (!nameRegex.test(lastName)) {
    errors.lastName = "Endast bokstäver är tillåtna";
  }

  if (!email) {
    errors.email = "Detta fält är obligatoriskt";
  } else if (!emailRegex.test(email)) {
    errors.email = "Vänligen ange en giltig e-postadress";
  }

  if (
    password === undefined ||
    password?.trim() === null ||
    password?.trim() === ""
  ) {
    errors.password = "Detta fält är obligatoriskt";
  } else if (!passwordRegex.test(password)) {
    errors.password =
      "Lösenordet måste innehålla minst en versal, en gemen, en siffra, ett specialtecken och får inte innehålla något mellanslag";
  } else if (password.length < 6) {
    errors.password = "Lösenordslängden måste vara minst 6 tecken";
  } else if (password.length > 16) {
    errors.password =
      "Lösenordslängden måste vara kortare än eller lika med 16";
  }
  return errors;
};
