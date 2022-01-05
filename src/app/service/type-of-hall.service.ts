import { TypeOfHall } from './../model/type-of-hall.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Types } from './mock-data/list-type-of-hall';

@Injectable({
  providedIn: 'root'
})
export class TypeOfHallService {

  constructor() { }

  get List() {
    return of<TypeOfHall[]>(Types)
  }

  add(obj: TypeOfHall) {
    return of<number>(Types.push(obj))
  }

  remove(id: string) {
    Types.forEach((value, index) => {
      if(value.id === id) {
        Types.splice(index, 1)
      }
    })
  }

  update(obj: TypeOfHall) {
    Types.forEach((value) => {
      if(value.id === obj.id) {
        value.name = obj.name,
        value.minPrice = obj.minPrice
      }
    })
  }
}
