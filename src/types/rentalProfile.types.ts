export type RentalProfileType = {
  rentalId?: number | string;
  cityId: string;
  isFirstHand: boolean;
  isSubContract: boolean;
  minRooms?: number | string;
  maxRooms?: number;
  minSize?: number;
  maxSize?: number;
  minrent?: number;
  maxrent?: number;
  guardianChildrenCount: number;
  accomodationType: string;
  incomeAmount: number;
  typeOfIncome: string;
  // noOfRooms: [number, number];
  // size: [number, number];
  // rent: [number, number];
};
