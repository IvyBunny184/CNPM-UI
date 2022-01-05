export interface Bill {
    id: string,
    bookingId: string,
    dateOfPayment: Date,
    paymentType: string,
    fee: number
}