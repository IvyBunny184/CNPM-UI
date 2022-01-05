import { BillService } from './../../service/bill.service';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-payment-dialog',
  templateUrl: './payment-dialog.component.html'
})
export class PaymentDialogComponent implements OnInit {
  @Input() paymentId: string
  @Input() isAdd: boolean
  form: FormGroup
  
  constructor(
    protected ref: NbDialogRef<PaymentDialogComponent>,
    private billService: BillService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      describe: ['']
    })
    if(!this.isAdd) {
      this.billService.ListPayment.subscribe(res => {
        this.form.get('name').setValue(res[0].name)
        this.form.get('describe').setValue(res[0].describe)
        this.paymentId = res[0].id
      })
    }
    else {
      this.paymentId = 'PMNEW'
    }
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }

  cancel() {
    this.ref.close(false)
  }

  submit(){
    this.ref.close(true)
  }
}
