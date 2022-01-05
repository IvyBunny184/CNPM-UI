import { HallService } from './../../../service/hall.service';
import { routes } from './../../../auth/auth-routing.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService, NbToastrService, NbDateService } from '@nebular/theme';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BookingService } from './../../../service/booking.service';
import { Component, OnInit } from '@angular/core';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { Booking } from '../../../model/booking.model';
import { Hall } from '../../../model/hall.model';
import { Shift } from '../../../model/shift.model';

@Component({
  selector: 'ngx-add-booking',
  templateUrl: './add-booking.component.html'
})
export class AddBookingComponent implements OnInit {
  booking: Booking;
  isAdd = true;
  halls: Hall[];
  shifts: Shift[];
  form: FormGroup;

  constructor(
    private bookingService: BookingService,
    private hallService: HallService,
    private dateService: NbDateService<Date>,
    private router: Router,
    private route: ActivatedRoute,
    private toast: NbToastrService,
    private dialog: NbDialogService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadData()
    this.initForm()
    this.route.params.subscribe((params: Params) => {
      if(params['id'] != null) {
        this.bookingService.getById(params['id']).subscribe(res => {
          this.booking = res;
          this.isAdd = false;
          this.loadValue()
        })
      }
    })
  }

  loadData(){
    // this.roomService.ListRooms.subscribe(res => {
    //   this.rooms = res
    // })
    // this.bookingService.ListCustomerAvailable.subscribe(res => {
    //   this.customers = res;
    // })
    // this.initForm()
    this.bookingService.ListShift.subscribe(res => {
      this.shifts = res
    })
    this.hallService.List.subscribe(res => {
      this.halls = res
    })
  }

  initForm() {
    this.form = this.fb.group({
      hallId: ['', [Validators.required]],
      groomName: ['', [Validators.required]],
      brideName: ['', [Validators.required]],
      shiftId: ['', [Validators.required]],
      date: [new Date(), [Validators.required]],
      price: [0, [Validators.required, Validators.min(1)]],
      deposit: [0, [Validators.required, Validators.min(1)]],
    })
  }

  loadValue() {
    this.form.get('hallId').setValue(this.booking.hallId)
    this.form.get('groomName').setValue(this.booking.groomName)
    this.form.get('brideName').setValue(this.booking.brideName)
    this.form.get('shiftId').setValue(this.booking.shiftId)
    this.form.get('date').setValue(new Date(this.booking.date))
    this.form.get('price').setValue(this.booking.price)
    this.form.get('deposit').setValue(this.booking.deposit)
  }

  getFormData() {
    this.booking.hallId = this.getValue('hallId'),
    this.booking.groomName = this.getValue('groomName'),
    this.booking.brideName = this.getValue('brideName'),
    this.booking.shiftId = this.getValue('shiftId'),
    this.booking.date = new Date(this.getValue('date')),
    this.booking.price = this.getValue('price')
    this.booking.deposit = this.getValue('deposit')
  }

  submitForm() {
    console.log(this.isAdd)
    if(this.isAdd) this.addNew()
    else this.update()
  }

  addNew() {
    console.log('add')
    this.booking = {
      id: 'id',
      hallId: this.getValue('hallId'),
      groomName: this.getValue('groomName'),
      brideName: this.getValue('brideName'),
      shiftId: this.getValue('shiftId'),
      date: new Date(this.getValue('date')),
      price: this.getValue('price'),
      deposit: this.getValue('deposit'),
      isCancel: false
    }
    // this.bookingService.NewBooking(this.booking).subscribe(res => {
    //   this.toast.show('Create', 'Create booking successful', {status:'success'})
    //   this.router.navigateByUrl('/home/booking')
    // },
    // err => {
    //   this.dialog.open(DialogResultComponent, {
    //     context: {
    //       title: 'Error when create booking!!!',
    //       content: err.error
    //     }
    //   })
    // })
  }

  update() {
    // this.getFormData()
    // this.bookingService.EditBooking(this.booking).subscribe(res => {
    //   this.toast.show('Edit', 'Edit booking successful', {status:'success'})
    //   this.router.navigateByUrl('/home/booking/details/' + this.booking.id)
    // },
    // err => {
    //   this.dialog.open(DialogResultComponent, {
    //     context: {
    //       title: 'Error when edit booking!!!',
    //       content: err.error
    //     }
    //   })
    // })
  }

  getValue(ctrl: string) {
    return this.form.get(ctrl).value
  }
  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }

  resetFrm() {
    if(this.isAdd) this.initForm()
    else this.loadValue()
  }

  minDate() {
    return new Date()
  }
}
