import { DialogResultComponent } from './../../../dialog/dialog-result/dialog-result.component';
import { LocalDataSource } from 'ng2-smart-table';
import { BookingService } from './../../../service/booking.service';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShiftDialogComponent } from '../../../dialog/shift-dialog/shift-dialog.component';

@Component({
  selector: 'ngx-shift',
  templateUrl: './shift.component.html'
})
export class ShiftComponent implements OnInit {
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
        note: {
            title: 'Ghi chú',
            type: 'string'
        }
      }
  }
  source: LocalDataSource = new LocalDataSource()

  constructor(
    private bookingService: BookingService,
    private dialog: NbDialogService
  ) { }

  ngOnInit(): void {
    this.loadSrc()
  }

  loadSrc() {
    this.source.reset()
    this.bookingService.ListShift.subscribe(res => {
      this.source.load(res)
    })
  }

  onCreate(event) {
    this.dialog.open(ShiftDialogComponent, {
      context: {
        isAdd: true
      }
    })
  }

  onEdit(event) {
    this.dialog.open(ShiftDialogComponent, {
      context: {
        isAdd: false,
        shiftId: event.data.id
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
