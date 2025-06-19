
export const validateOnChangeRentalProfile = (name: string,
   value: any,
   errors: any) => {
   switch (name) {
      case "cityId":
         if (!value) {
            errors.cityId = "Detta fält är obligatoriskt";
         } else {
            delete errors.cityId;
         }
         break;
   }
   return errors
}


export const validateOnSaveRentalProfile = (rentalProfileData: any = {}): { [key: string]: string } => {
   let errors: { [key: string]: string } = {};
   const {
      cityId,
   } = rentalProfileData;

   if (!cityId) {
      errors.cityId = "Detta fält är obligatoriskt";
   }

   return errors
}