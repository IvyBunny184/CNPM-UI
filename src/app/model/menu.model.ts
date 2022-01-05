import { Food } from "./food.model";

export interface Menu {
    bookingId: string,
    foodId: string,
    amount: number,
    price: number,
    food?: Food
}
