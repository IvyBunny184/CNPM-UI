import { DialogResultComponent } from './../../../dialog/dialog-result/dialog-result.component';
import { NbDialogService } from '@nebular/theme';
import { BillService } from './../../../service/bill.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-list-bill',
  templateUrl: './list-bill.component.html'
})
export class ListBillComponent implements OnInit {
  settings = {
    actions:{
      add: false,
      edit: false,
      delete: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: '#',
        type: 'string',
        filter: true
      },
      bookingId: {
        title: 'Mã hóa đơn',
        type: 'string'
      },
      dateOfPayment: {
        title: 'Ngày thanh toán',
        type: 'date',
        valuePrepareFunction: (date)=>{
          var raw = new Date(date);
          var format = new DatePipe('en-EN').transform(raw, 'dd/MM/yyyy');
          return format;
        }
      },
      paymentType: {
        title: 'Phương thức',
        type: 'string'
      },
      fee: {
        title: 'Phí trễ',
        type: 'number'
      }
    }
  }
  source = new LocalDataSource()

  constructor(
    private billService: BillService,
    private dialog: NbDialogService
  ) { }

  ngOnInit(): void {
    this.loadSrc()
  }

  loadSrc() {
    this.source.reset()
    this.billService.List.subscribe(res => {
      this.source.load(res)
    })
  }

  onDelete(event) {
    console.log('delete')
    this.dialog.open(DialogResultComponent, {
      context: {
        title: 'Xóa hóa đơn thanh toán',
        content: `Bill ID: ${event.data.id}`
      }
    })
  }
}
