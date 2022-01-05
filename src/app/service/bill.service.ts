import { Payments } from './mock-data/list-type-of-payment';
import { TypeOfPayment } from './../model/type-of-payment.model';
import { Bills } from './mock-data/list-bill';
import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor() { }

  get List() {
    return of<Bill[]>(Bills)
  }

  get ListPayment() {
    return of<TypeOfPayment[]>(Payments)
  }
}
