import { FoodService } from './../../../service/food.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-add-food',
  templateUrl: './add-food.component.html'
})
export class AddFoodComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly foodService: FoodService,
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly toast: NbToastrService,
    private readonly dialog: NbDialogService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', [
        Validators.required, 
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern('^[0-9A-Z]{2,10}$')
      ]],
      name: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      describe: ['', [
        Validators.required,
      ]],
      price: ['', [
        Validators.required,
        Validators.min(1)
      ]]
    })
  }

  addFood() {
    // this.foodService.add({
    //   id : this.form.get('id').value,
    //   name : this.form.get('name').value,
    //   describe : this.form.get('description').value,
    //   price : this.form.get('price').value
    // }).subscribe(
    //   res => {
    //     this.toast.show('Add success', 'ADD', { status: 'success'}),
    //     this.router.navigateByUrl('/home/service')
    //   },
    //   err => {
    //     this.dialog.open(DialogResultComponent, {
    //       context: {
    //         title: 'ERROR',
    //         content: err.error
    //       }
    //     })
    //   }
    // )
    this.foodService.add({
      id : this.form.get('id').value,
      name : this.form.get('name').value,
      describe : this.form.get('description').value,
      price : this.form.get('price').value
    })
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }
}
