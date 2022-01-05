import { Service } from './../model/service.model';
import { Injectable } from '@angular/core';
import { Services } from './mock-data/list-service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  get List() {
    return of<Service[]>(Services)
  }

  add(obj: Service) {
    return Services.push(obj)
  }

  remove(index: number) {
    return Services.splice(index, 1)
  }

  getByID(id: string) {
    return of<Service>(Services[0])
  }
}
