import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingService } from './../../service/booking.service';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-shift-dialog',
  templateUrl: './shift-dialog.component.html'
})
export class ShiftDialogComponent implements OnInit {
  @Input() shiftId: string
  @Input() isAdd: boolean
  form: FormGroup
  constructor(    
    protected ref: NbDialogRef<ShiftDialogComponent>,
    private bookingService: BookingService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      note: ['']
    })
    if(!this.isAdd) {
      this.bookingService.ListShift.subscribe(res => {
        this.form.get('name').setValue(res[0].name)
        this.form.get('note').setValue(res[0].note)
        this.shiftId = res[0].id
      })
    }
    else {
      this.shiftId = 'SNEW'
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
