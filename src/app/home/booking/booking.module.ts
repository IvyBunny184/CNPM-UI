import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbIconModule, NbInputModule, NbButtonModule, NbActionsModule, NbUserModule, NbSelectModule, NbRadioModule, NbDatepickerModule, NbAlertModule, NbListModule, NbLayoutModule, NbSidebarModule, NbTooltipModule, NbTabsetModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { DialogModule } from '../../dialog/dialog.module';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { DetailsBookingComponent } from './details-booking/details-booking.component';
import { ShiftComponent } from './shift/shift.component';
import { PaymentComponent } from './payment/payment.component';
import { ListBillComponent } from './list-bill/list-bill.component';


@NgModule({
  declarations: [BookingComponent, AddBookingComponent, ListBookingComponent, DetailsBookingComponent, ShiftComponent, PaymentComponent, ListBillComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    NbCardModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbSelectModule,
    NbRadioModule,
    NbDatepickerModule,
    DialogModule,
    NbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    ThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbTooltipModule,
    NbTabsetModule
  ]
})
export class BookingModule { }
