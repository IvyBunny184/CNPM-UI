import { TypeOfPayment } from './../../model/type-of-payment.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { BillService } from '../../service/bill.service';

@Component({
  selector: 'ngx-payment-bill',
  templateUrl: './payment-bill.component.html'
})
export class PaymentBillComponent implements OnInit {
  @Input() bookingId: string
  listTypePayment: TypeOfPayment[]
  form: FormGroup
  constructor(
    protected ref: NbDialogRef<PaymentBillComponent>,
    private billService: BillService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadSrc()
    this.loadForm()
  }

  loadSrc() {
    this.billService.ListPayment.subscribe(res => {
      this.listTypePayment = res
    })
  }

  loadForm() {
    this.form = this.fb.group({
      id: ['BILL001',[Validators.required]],
      typeOfPay: ['', [Validators.required]]
    })
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }

  cancel() {
    this.ref.close(false)
  }

  submit() {
    this.ref.close(true)
  }
}
