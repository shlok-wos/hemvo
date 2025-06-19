export type RentalProfileType = {
   rentalId?: number | string
   personalPrefrence: string;
   cityId: string;
   isFirstHand: boolean;
   isSubContract: boolean;
   noOfRooms: [number, number];
   size: [number, number];
   rent: [number, number];
}
 