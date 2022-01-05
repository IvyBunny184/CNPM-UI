import { Shift } from './../model/shift.model';
import { Menus } from './mock-data/list-menu';
import { Bookings } from './mock-data/list-booking';
import { Booking } from './../model/booking.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Menu } from '../model/menu.model';
import { ListServices } from '../model/list-services.model';
import { ListSvs } from './mock-data/list-service-booking';
import { Shifts } from './mock-data/list-shift';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  get List() {
    return of<Booking[]>(Bookings)
  }

  getById(id: string) {
    return of<Booking>(Bookings[0])
  }

  add(obj: Booking) {
    return of<number>(Bookings.push(obj))
  }

  remove(id: string) {
    Bookings.forEach((value, index) => {
      if(value.id === id) {
        Bookings.splice(index, 1)
      }
    })
  }

  getMenu(id: string) {
    return of<Menu[]>(Menus)
  }

  getServices(id: string) {
    return of<ListServices[]>(ListSvs)
  }

  get ListShift() {
    return of<Shift[]>(Shifts)
  }
}
