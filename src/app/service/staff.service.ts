import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Staff } from '../model/staff.model';
import { Staffs } from './mock-data/list-staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }

  get List() {
    return of<Staff[]>(Staffs)
  }

  add(obj: Staff) {
    return Staffs.push(obj)
  }

  remove(index: number) {
    return Staffs.splice(index, 1)
  }
}
