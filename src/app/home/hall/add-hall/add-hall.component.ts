import { TypeOfHallService } from './../../../service/type-of-hall.service';
import { TypeOfHall } from './../../../model/type-of-hall.model';
import { HallService } from './../../../service/hall.service';
import { Router } from '@angular/router';
import { DialogResultComponent } from './../../../dialog/dialog-result/dialog-result.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { RoomTypeService } from './../../../data/room-type.service';
import { RoomService } from './../../../data/room.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-hall',
  templateUrl: './add-hall.component.html',
})
export class AddHallComponent implements OnInit{
  frmHall: FormGroup
  listType: TypeOfHall[]

  constructor(
    private readonly hallService: HallService,
    private readonly hallTypeService: TypeOfHallService,
    private readonly dialog: NbDialogService,
    private readonly toast: NbToastrService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.frmHall = this.hallService.formAdd;
    this.hallTypeService.List
    .subscribe(res => {
        this.listType = res
      },
      err => {
        this.dialog.open(DialogResultComponent, {
          context: {
            title: 'Error',
            content: 'Can not load list room type \n' + err.error
          }
        })
      })
  }

  addHall() {
    this.hallService.add({
      id: this.frmHall.get('id').value,
      name: this.frmHall.get('name').value,
      typeId: this.frmHall.get('typeId').value,
      price: this.frmHall.get('price').value,
      describe: this.frmHall.get('describe').value,
      maxTables: this.frmHall.get('maxTables').value
    }).subscribe(
      res => {
        this.toast.show('Add Room', 'Add new room successful', {status:'success'})
        this.router.navigateByUrl('/room/details/' + this.frmHall.get('id').value)
      },
      err => {
        this.dialog.open(DialogResultComponent, {
          context: {
            title: 'Error when add room!!!',
            content: err.error
          }
        })
      }
    )
  }

  getConfig(ctrl: string):boolean {
    return this.frmHall.get(ctrl).invalid && this.frmHall.get(ctrl).touched
  }
}