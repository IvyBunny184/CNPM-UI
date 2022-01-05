import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Halls } from './mock-data/list-hall';
import { Hall } from './../model/hall.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ImageOfHall } from '../model/image-of-hall.model';
import { Images } from './mock-data/list-img';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  constructor(
    private fb: FormBuilder
  ) { }

  get List() {
    return of<Hall[]>(Halls)
  }

  add(obj: Hall) {
    return of<number>(Halls.push(obj))
  }

  getById(id: string) {
    return of<Hall>(Halls[0])
  }

  remove(id: string) {
    Halls.forEach((value, index) => {
      if(value.id === id) Halls.splice(index, 1)
    })
  }

  getListImg(id: string) {
    return of<ImageOfHall[]>(Images)
  }

  get formAdd() {
    return this.fb.group({
      id: [null,[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern('^[0-9a-zA-Z]{4,10}$')
      ]],
      name: [null,[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]],
      typeId: [null, [
        Validators.required
      ]],
      maxTables:[0, [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]],
      price:[0, [
        Validators.required,
        Validators.min(1)
      ]],
      describe: [ '',
        Validators.required
      ]
    })
  }

  getFormUpdate(id: string):FormGroup {
    const form = this.formAdd
    this.getById(id).subscribe(res => {
      form.get('id').setValue(res.id);
      form.get('name').setValue(res.name);
      form.get('typeId').setValue(res.typeId);
      form.get('maxTables').setValue(res.maxTables);
      form.get('price').setValue(res.price);
      form.get('describe').setValue(res.describe);
    })
    return form
  }
}
