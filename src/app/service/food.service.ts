import { Foods } from './mock-data/list-food';
import { Food } from './../model/food.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  get List() {
    return of<Food[]>(Foods)
  }

  add(obj: Food) {
    return Foods.push(obj)
  }

  getByID(id: string) {
    return of<Food>(Foods[0])
  }
}
