import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbSelectModule, NbInputModule, NbAccordionModule, NbListModule, NbIconModule, NbProgressBarModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogResultComponent } from './dialog-result/dialog-result.component';
import { DistributionComponent } from './distribution/distribution.component';
import { InnerHTMLPipe } from '../@theme/pipes';
import { BillOrderComponent } from './bill-order/bill-order.component';
import { ShiftDialogComponent } from './shift-dialog/shift-dialog.component';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { PaymentBillComponent } from './payment-bill/payment-bill.component';



@NgModule({
  declarations: [
    DialogResultComponent,
    DistributionComponent,
    BillOrderComponent,
    ShiftDialogComponent,
    PaymentDialogComponent,
    PaymentBillComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    ReactiveFormsModule,
    NbAccordionModule,
    NbListModule,
    NbIconModule,
    NbProgressBarModule
  ]
})
export class DialogModule { }
