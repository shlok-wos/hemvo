import { emailRegex, nameRegex, numberOnlyRegex, onlyNumberAndFlotRegex, passwordRegex } from "@/regex";
import { UserCreateAccountErrorType, UseUpdatePasswordErrorType } from "@/types/user.types";

const phoneNumberLengthMax = 15
const phoneNumberLengthMin = 10
export const validateOnUpdateContactDetails = (name: string,
   value: any,
   errors: any) => {
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
         value = value?.trim()
         if (!value) {
            errors.phoneNumber = "Detta fält är obligatoriskt.";
         } else if (!numberOnlyRegex.test(value)) {
            errors.phoneNumber = "Endast siffror är tillåtna";
         } else if (value.length > phoneNumberLengthMax || value.length < phoneNumberLengthMin) {
            errors.phoneNumber = "Enter Valid Mobile number";
         } else {
            delete errors.phoneNumber;
         }
         break;
   }
   return errors
}

export const validateOnSubmitContactDetails = (authData: any = {}) => {
   let errors: UserCreateAccountErrorType = {};
   const {
      firstName,
      lastName,
      email,
      phoneNumber
   } = authData;

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
   return errors
}


export const validateOnChangeUpdatePassword = (name: string,
   value: any,
   errors: any,
) => {
   switch (name) {
      case "oldPassword":
         if (!value) {
            errors.oldPassword = "Detta fält är obligatoriskt";
         } else {
            delete errors.oldPassword;
         }
         break;

      case "newPassword":
         if (value.trim() === null || value.trim() === "" || value === undefined) {
            errors.newPassword = "Detta fält är obligatoriskt";
         } else if (!passwordRegex.test(value)) {
            errors.newPassword =
               "Lösenordet måste innehålla minst en versal, en gemen, en siffra, ett specialtecken och får inte innehålla något mellanslag";
         } else if (value.length < 6) {
            errors.newPassword = "Password length must be atleast 6 letters";
         } else if (value.length > 16) {
            errors.newPassword = "Password length must be less than or or equal to 16";
         } else {
            delete errors.newPassword;
         }
         break;

   }
   return errors
}

export const validateOnSubmitChangeUpdatePassword = (newPasswordData: any = {}) => {
   let errors: UseUpdatePasswordErrorType = {};
   const {
      oldPassword,
      newPassword
   } = newPasswordData;

   if (!oldPassword) {
      errors.oldPassword = "Detta fält är obligatoriskt";
   }
   
   if (!newPassword) {
      errors.newPassword = "Detta fält är obligatoriskt";
   } else if (!passwordRegex.test(newPassword)) {
      errors.newPassword =
         "Lösenordet måste innehålla minst en versal, en gemen, en siffra, ett specialtecken och får inte innehålla något mellanslag";
   } else if (newPassword.length < 6) {
      errors.newPassword = "Password length must be atleast 6 letters";
   } else if (newPassword.length > 16) {
      errors.newPassword = "Password length must be less than or or equal to 16";
   }
   return errors
}