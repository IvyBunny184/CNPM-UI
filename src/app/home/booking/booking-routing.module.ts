import { ShiftComponent } from './shift/shift.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { DetailsBookingComponent } from './details-booking/details-booking.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { BookingComponent } from './booking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ListBillComponent } from './list-bill/list-bill.component';

const routes: Routes = [
  {
    path:'',
    component: BookingComponent,
    children: [
      {
        path:'',
        component:ListBookingComponent
      },
      {
        path:'details/:id',
        component:DetailsBookingComponent
      },
      {
        path:'new',
        component: AddBookingComponent
      },
      {
        path: 'edit/:id',
        component: AddBookingComponent
      },
      {
        path: 'shift',
        component: ShiftComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'bill',
        component: ListBillComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
