import { Service } from "./service.model";

export interface ListServices {
    bookingId: string,
    serviceId: string,
    amount: number,
    price: number,
    service?: Service
}
