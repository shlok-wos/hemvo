import { emailRegex, nameRegex, numberOnlyRegex, passwordRegex } from "@/regex";
import { UserCreateAccountErrorType, UserCreateAccountType } from "@/types/user.types";

const phoneNumberLengthMax = 15;
const phoneNumberLengthMin = 10;
export const validateUserInquiryOnChange = (name: string, value: any, errors: any) => {
  switch (name) {
    case "firstName":
      if (!value) {
        errors.firstName = "Detta fält är obligatoriskt";
      } else if (value.length >= 30) {
        errors.firstName = "Maximum 30 character are allowed";
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
        errors.lastName = "Maximum 30 character are allowed";
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

    case "phoneNumber":
      value = value?.trim();
      if (!value) {
        errors.phoneNumber = "Detta fält är obligatoriskt.";
      } else if (!numberOnlyRegex.test(value)) {
        errors.phoneNumber = "Endast siffror är tillåtna";
      } else if (value.length > phoneNumberLengthMax || value.length < phoneNumberLengthMin) {
        errors.phoneNumber = "Ange ett giltigt mobilnummer.";
      } else {
        delete errors.phoneNumber;
      }
      break;
  }
  return errors;
};

export const validateUserInquirySubmit = (authData: any = {}) => {
  let errors: UserCreateAccountErrorType = {};
  const { firstName, lastName, email, phoneNumber } = authData;

  if (!firstName) {
    errors.firstName = "Detta fält är obligatoriskt";
  } else if (firstName.length >= 30) {
    errors.firstName = "Maximum 30 character are allowed";
  } else if (!nameRegex.test(firstName)) {
    errors.firstName = "Endast bokstäver är tillåtna";
  }

  if (!lastName) {
    errors.lastName = "Detta fält är obligatoriskt";
  } else if (lastName.length >= 30) {
    errors.lastName = "Maximum 30 character are allowed";
  } else if (!nameRegex.test(lastName)) {
    errors.lastName = "Endast bokstäver är tillåtna";
  }

  if (!email) {
    errors.email = "Detta fält är obligatoriskt";
  } else if (!emailRegex.test(email)) {
    errors.email = "Vänligen ange en giltig e-postadress";
  }

  if (!phoneNumber) {
    errors.phoneNumber = "Detta fält är obligatoriskt.";
  } else if (!numberOnlyRegex.test(phoneNumber)) {
    errors.phoneNumber = "Endast siffror är tillåtna";
  } else if (phoneNumber.length > phoneNumberLengthMax || phoneNumber.length < phoneNumberLengthMin) {
    errors.phoneNumber = "Enter 10 digit Mobile number";
  }
  return errors;
};
