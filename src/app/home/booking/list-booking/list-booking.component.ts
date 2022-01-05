import { BookingService } from './../../../service/booking.service';
import { NbDialogService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBillPipe } from './../../../@theme/pipes/status-bill.pipe';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-list-booking',
  templateUrl: './list-booking.component.html'
})
export class ListBookingComponent implements OnInit {
  settings = {
    actions:{
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: '#',
        type: 'string',
        filter: true
      },
      hallId: {
        title: 'Sảnh',
        type: 'string',
        // valuePrepareFunction: (data: any) => {
        //   return data.id + " : " + data.name
        // },
        // filterFunction(cell: Room, search: string): boolean {   
        //   if (search === '' || cell.id.includes(search) || cell.name.includes(search)) {
        //     return true;
        //   } else {
        //     return false;
        //   }     
        // }
      },
      // customer: {
      //   title: 'Customer',
      //   type: 'string',
      //   valuePrepareFunction: (data: any) => {
      //     return data.id + " : " + data.name
      //   },
      //   filterFunction(cell: Customer, search: string): boolean {   
      //     if (search === '' || cell.id.includes(search) || cell.name.includes(search)) {
      //       return true;
      //     } else {
      //       return false;
      //     }     
      //   }
      // },
      groomName: {
        title: 'Chú rể',
        type: 'string'
      },
      brideName: {
        title: 'Cô dâu',
        type: 'string'
      },
      date: {
        title: 'Ngày tổ chức',
        type: 'date',
        valuePrepareFunction: (date)=>{
          var raw = new Date(date);
          var format = new DatePipe('en-EN').transform(raw, 'dd/MM/yyyy');
          return format;
        }
      },
      shiftId: {
        title: 'Ca',
        type: 'string'
      },
      // status: {
      //   title: 'Status',
      //   type: 'string',
      //   valuePrepareFunction: (data)=>{
      //     return new StatusBillPipe().transform(data)
      //   },
      //   filter: {
      //     type: 'list',
      //     config: {
      //       selectText: 'Select status',
      //       list: [
      //         {value: 'wait', title:'Chờ xác nhận'},
      //         {value: 'confirm', title:'Đã xác nhận'},
      //         {value: 'payment', title:'Đã thanh toán'},
      //         {value: 'cancel', title:'Đã hủy'},
      //         {value: 'checkin', title:'Check In'},
      //         {value: 'checkout', title:'Checkout'},
      //       ],
      //     }
      //   },
      //   filterFunction(cell?: any, search?: string): boolean {   
      //     if (search === '' || search === cell || (search === 'wait' && cell === '')) {
      //       return true;
      //     } else {
      //       return false;
      //     }     
      //   }
      // }
    }
  }
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bookingService.List.subscribe(data => {
      this.source.load(data)
    })
    this.route.queryParams.subscribe(params => {
      if(params.search != null) { this.onSearch(params.search)}
    })
  }

  SelectBooking(booking: any) {
    this.router.navigateByUrl('/home/booking/details/' + booking.data.id)
  }

  onSearch(query: string = ''){
    query.trim()
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
    ], false)
  }
}
