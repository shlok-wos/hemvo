import { numberOnlyRegex } from "@/regex";

export const validateOnChangeRentalProfile = (
  name: string,
  value: any,
  errors: any,
  rentalProfileData: any
) => {
  switch (name) {
    case "cityId":
      if (!value) {
        errors.cityId = "Välj stad";
      } else {
        delete errors.cityId;
      }
      break;

    case "minRooms":
      if (!value) {
        errors.minRooms = "Välj stad";
      } else if (value >= rentalProfileData?.maxRooms) {
        errors.minRooms = "Minsta antal rum måste vara färre än maxantalet rum";
      } else if (value < rentalProfileData?.maxRooms) {
        delete errors.maxRooms;
        delete errors.minRooms;
      } else {
        delete errors.minRooms;
      }
      break;

    case "maxRooms":
      if (!value) {
        errors.maxRooms = "Välj stad";
      } else if (Number(value) <= Number(rentalProfileData?.minRooms)) {
        errors.maxRooms = "Max antal rum måste vara större än min antal rum";
      } else if (Number(value) > Number(rentalProfileData?.minRooms)) {
        delete errors.minRooms;
        delete errors.maxRooms;
      } else {
        delete errors.maxRooms;
      }
      break;

    case "minSize":
      if (!value) {
        errors.minSize = "Välj stad";
      } else if (Number(value) >= Number(rentalProfileData?.maxSize)) {
        errors.minSize = "Minsta storlek måste vara mindre än maxstorlek";
      } else if (Number(value) < Number(rentalProfileData?.maxSize)) {
        delete errors.maxSize;
        delete errors.minSize;
      } else {
        delete errors.minSize;
      }
      break;

    case "maxSize":
      if (!value) {
        errors.maxSize = "Välj stad";
      } else if (Number(value) <= Number(rentalProfileData?.minSize)) {
        errors.maxSize = "Maxstorleken måste vara större än minimistorleken";
      } else if (Number(value) > Number(rentalProfileData?.minSize)) {
        delete errors.minSize;
        delete errors.maxSize;
      } else {
        delete errors.maxSize;
      }
      break;

    case "minrent":
      if (!value) {
        errors.minrent = "Välj stad";
      } else if (Number(value) >= Number(rentalProfileData?.maxrent)) {
        errors.minrent = "Minsta hyra måste vara lägre än maxhyra";
      } else if (Number(value) < Number(rentalProfileData?.maxrent)) {
        delete errors.maxrent;
        delete errors.minrent;
      } else {
        delete errors.minrent;
      }
      break;

    case "maxrent":
      if (!value) {
        errors.maxrent = "Välj stad";
      } else if (Number(value) <= Number(rentalProfileData?.minrent)) {
        errors.maxrent = "Maxhyran måste vara högre än minimihyran";
      } else if (Number(value) > Number(rentalProfileData?.minrent)) {
        delete errors.minrent;
        delete errors.maxrent;
      } else {
        delete errors.maxrent;
      }
      break;

    case "accomodationType":
      if (!value) {
        errors.accomodationType = "Vänligen välj boendetyp";
      } else {
        delete errors.accomodationType;
      }
      break;

    case "typeOfIncome":
      if (!value) {
        errors.typeOfIncome = "Välj inkomsttyp";
      } else {
        delete errors.typeOfIncome;
      }
      break;

    case "incomeAmount":
      if (!value) {
        errors.incomeAmount = "Inkomstbelopp krävs";
      } else if (!numberOnlyRegex.test(value)) {
        errors.incomeAmount = "Ogiltigt inkomstbelopp";
      } else {
        delete errors.incomeAmount;
      }
      break;
  }
  return errors;
};

export const validateOnSaveRentalProfile = (
  rentalProfileData: any = {}
): { [key: string]: string } => {
   
  let errors: { [key: string]: string } = {};
  const { cityId } = rentalProfileData;

  if (!cityId) {
    errors.cityId = "Välj stad";
  }

  if (rentalProfileData?.minRooms >= rentalProfileData?.maxRooms) {
    errors.minRooms = "Minsta antal rum måste vara färre än maxantalet rum";
  }

  if (rentalProfileData?.maxRooms <= rentalProfileData?.minRooms) {
    errors.maxRooms = "Max antal rum måste vara större än min antal rum";
  }

  if (rentalProfileData?.minSize >= rentalProfileData?.maxSize) {
    errors.minSize = "Minsta storlek måste vara mindre än maxstorlek";
  }

  if (rentalProfileData?.maxSize <= rentalProfileData?.minSize) {
    errors.maxSize = "Maxstorleken måste vara större än minimistorleken";
  }

  if (rentalProfileData?.minrent >= rentalProfileData?.maxrent) {
    errors.minrent = "Minsta hyra måste vara lägre än maxhyra";
  }

  if (rentalProfileData?.maxrent <= rentalProfileData?.minrent) {
    errors.maxrent = "Maxhyran måste vara högre än minimihyran";
  }

  if (!rentalProfileData?.accomodationType) {
    errors.accomodationType = "Vänligen välj boendetyp";
  }

  if (!rentalProfileData?.typeOfIncome) {
    errors.typeOfIncome = "Välj inkomsttyp";
  }

  if (!rentalProfileData?.incomeAmount) {
    errors.incomeAmount = "Inkomstbelopp krävs";
  }

  if (
    rentalProfileData?.incomeAmount &&
    !numberOnlyRegex.test(rentalProfileData?.incomeAmount)
  ) {
    errors.incomeAmount = "Ogiltigt inkomstbelopp";
  }
  return errors;
};
