export type RentalProfileType = {
  rentalId?: number | string;
  personalPrefrence: string;
  cityId: string;
  isFirstHand: boolean;
  isSubContract: boolean;
  minRooms?: number | string;
  maxRooms?: number;
  minSize?: number;
  maxSize?: number;
  minrent?: number;
  maxrent?: number;
  // noOfRooms: [number, number];
  // size: [number, number];
  // rent: [number, number];
};
