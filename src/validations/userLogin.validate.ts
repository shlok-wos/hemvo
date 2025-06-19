import { emailRegex, nameRegex, passwordRegex } from "@/regex";
import { UserCreateAccountErrorType, UserCreateAccountType } from "@/types/user.types";

export const validateOnUserLogin = (name: string,
   value: any,
   errors: any) => {
   switch (name) {
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
         } else {
            delete errors.password;
         }
         break;
   }
   return errors
}

export const validateOnSubmitUserLogin = (authData: any = {}) => {
   let errors: UserCreateAccountErrorType = {};
   const {
      email,
      password
   } = authData;


   if (!email) {
      errors.email = "Detta fält är obligatoriskt";
   } else if (!emailRegex.test(email)) {
      errors.email = "Vänligen ange en giltig e-postadress";
   }

   if (!password) {
      errors.password = "Detta fält är obligatoriskt";
   }
   return errors
}