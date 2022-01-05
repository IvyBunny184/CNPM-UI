import { TypeOfHall } from "./type-of-hall.model";

export interface Hall {
    id: string,
    name: string,
    typeId: string,
    maxTables: number,
    note?: string,
    describe?: string,
    price: number,
    type?: TypeOfHall
}