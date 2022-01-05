import { PaymentBillComponent } from './../../../dialog/payment-bill/payment-bill.component';
import { DialogResultComponent } from './../../../dialog/dialog-result/dialog-result.component';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { BookingService } from './../../../service/booking.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../model/booking.model';
import { settingsMenu } from './setting-menu';
import { settingService } from './setting-services';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { BillOrderComponent } from '../../../dialog/bill-order/bill-order.component';

@Component({
  selector: 'ngx-details-booking',
  templateUrl: './details-booking.component.html'
})
export class DetailsBookingComponent implements OnInit {
  booking: Booking
  settingSV = settingService
  listSV = new LocalDataSource()
  settingMN = settingsMenu
  menu = new LocalDataSource()

  constructor(
    private bookingService: BookingService,
    private dialog: NbDialogService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: NbToastrService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.route.params.subscribe((params: Params) => {
      if(params['id'] != null) {
        this.bookingService.getById(params['id']).subscribe(res => {
          this.booking = res;
          this.loadListSV()
          this.loadMenu()
        })
      }
    })
  }

  loadListSV() {
    this.bookingService.getServices(this.booking.id).subscribe(res => {
      this.listSV.reset()
      this.listSV.load(res)
    })
  }

  loadMenu() {
    this.bookingService.getMenu(this.booking.id).subscribe(res => {
      this.menu.reset()
      this.menu.load(res)
    })
  }

  CanEdit() {
    //return (new Date(this.bill.checkoutDate) >= new Date() && this.bill.status != 'cancel')
  }

  EditBooking() {
    this.router.navigateByUrl('/home/booking/edit/' + this.booking.id)
  }

  onDeleteFood(event) {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove food?`,
        content: `Food id: ${event.data.foodId}`
      }
    })
  }

  onAddFood(event) {
    this.dialog.open(BillOrderComponent, {
      context: {
        bookingId: this.booking.id,
        isService: false,
        isEdit: false
      }
    })
  }

  onEditFood(event) {
    this.dialog.open(BillOrderComponent, {
      context: {
        bookingId: this.booking.id,
        isService: false,
        isEdit: true,
        data: event.data.foodId
      }
    })
  }

  onDeleteSV(event) {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove service?`,
        content: `Service id: ${event.data.serviceId}`
      }
    })
  }

  onAddSV(event) {
    this.dialog.open(BillOrderComponent, {
      context: {
        bookingId: this.booking.id,
        isService: true,
        isEdit: false
      }
    })
  }

  onEditSV(event) {
    this.dialog.open(BillOrderComponent, {
      context: {
        bookingId: this.booking.id,
        isService: true,
        isEdit: true,
        data: event.data.serviceId
      }
    })
  }

  RemoveBooking() {
    // this.bookingService.DeleteBooking(this.bill.id).subscribe(
    //   res => {
    //     this.toastr.show(`Remove bill #${this.bill.id} success`, 'Remove', {status:'success'})
    //     this.router.navigateByUrl('/home/booking')
    //   },
    //   err => {
    //     this.dialog.open(DialogResultComponent, {
    //       context: {
    //         title:'ERROR REMOVE',
    //         content: err.error
    //       }
    //     })
    //   }
    // )
  }

  CallService() {
    // this.dialog.open(CallServiceComponent, {
    //   context: {
    //     id: this.bill.id
    //   }
    // }).onClose.subscribe(res => {
    //   this.loadData()
    // })
  }

  Checkout() {
    this.dialog.open(PaymentBillComponent, {
      context: {
        bookingId: this.booking.id
      }
    })
  }
}
