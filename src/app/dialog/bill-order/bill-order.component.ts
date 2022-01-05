import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServiceService } from '../../service/service.service';
import { Console } from 'console';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'ngx-bill-order',
  templateUrl: './bill-order.component.html',
  styleUrls: ['./bill-order.component.scss']
})
export class BillOrderComponent implements OnInit {
  @Input() bookingId: string
  @Input() isService: boolean
  @Input() isEdit: boolean
  @Input() data: string
  listOption: any
  form: FormGroup
  constructor(
    protected ref: NbDialogRef<BillOrderComponent>,
    private serviceService: ServiceService,
    private foodService: FoodService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadListOpt()
  }

  loadListOpt() {
    if(this.isService) {
      this.serviceService.List.subscribe(res => {
        this.listOption = res
        this.initForm()
      })
    }
    else {
      this.foodService.List.subscribe(res => {
        this.listOption = res
        this.initForm()
      })
    }
  }

  initForm() {
    this.form = this.fb.group({
      id: [{value: '', disabled: this.isEdit}, [Validators.required]],
      price: [1, [Validators.required, Validators.min(1)]],
      amount: [1, [Validators.required, Validators.min(1)]]
    })
    if(this.isEdit) {
      this.form.get('id').setValue(this.data)
      this.form.get('id').disable
    }
  }

  submit() {
    this.ref.close(true)
  }

  cancel() {
    this.ref.close(false)
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }
}
