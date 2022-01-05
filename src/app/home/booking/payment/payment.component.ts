import { PaymentDialogComponent } from './../../../dialog/payment-dialog/payment-dialog.component';
import { BillService } from './../../../service/bill.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true
    },
    mode: 'external',
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
      columns: {
        id: {
          title: 'Mã ca',
          type: 'string',
          filter: true
        },
        name: {
          title: 'Tên ca',
          type: 'string'
        },
        describe: {
            title: 'Mô tả',
            type: 'string'
        }
      }
  }
  source: LocalDataSource = new LocalDataSource()

  constructor(
    private billService: BillService,
    private dialog: NbDialogService
  ) { }

  ngOnInit(): void {
    this.loadSrc()
  }

  loadSrc() {
    this.source.reset()
    this.billService.ListPayment.subscribe(res => {
      this.source.load(res)
    })
  }

  onCreate(event) {
    this.dialog.open(PaymentDialogComponent, {
      context: {
        isAdd: true
      }
    })
  }

  onEdit(event) {
    this.dialog.open(PaymentDialogComponent, {
      context: {
        isAdd: false,
        paymentId: event.data.id
      }
    })
  }

  onRemove(event) {
    console.log('remove')
    this.dialog.open(DialogResultComponent, {
      context: {
        title: "Are you want to remove this shift?",
        content: "Shift ID: " + event.data.id
      }
    })
  }

}
