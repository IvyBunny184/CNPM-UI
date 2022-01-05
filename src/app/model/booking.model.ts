import { Hall } from "./hall.model";
import { Shift } from "./shift.model";

export interface Booking {
    id: string,
    hallId: string,
    groomName: string,
    brideName: string,
    date: Date,
    shiftId: string,
    price: number,
    deposit: number,
    isCancel: boolean,
    hall?: Hall,
    shift?: Shift
}