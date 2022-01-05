import { TypeOfHall } from './../../../model/type-of-hall.model';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap, filter } from 'rxjs/operators';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { HallService } from '../../../service/hall.service';
import { TypeOfHallService } from '../../../service/type-of-hall.service';
import { Hall } from '../../../model/hall.model';

@Component({
  selector: 'ngx-update-hall',
  templateUrl: './update-hall.component.html',
})
export class UpdateHallComponent implements OnInit {
  id: string;
  hall: Hall;
  frmHall: FormGroup;
  listType: TypeOfHall[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly hallService: HallService,
    private readonly hallTypeService: TypeOfHallService,
    private readonly dialog: NbDialogService,
    private readonly router: Router,
    private readonly toast: NbToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.hallService.getById(this.id).subscribe(res => this.hall = res)
      this.initFrm()
    })
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

  initFrm() {
    this.frmHall = this.hallService.getFormUpdate(this.id);
  }

  getConfig(ctrl: string):boolean {
    return this.frmHall.get(ctrl).invalid && this.frmHall.get(ctrl).touched
  }

  UpdateRoom() {
    // this.hallService.update({
    //   id: this.id,
    //   name: this.formEdit.get('name').value,
    //   description: this.formEdit.get('description').value,
    //   typeID: this.formEdit.get('type').value,
    //   adult: this.formEdit.get('adult').value,
    //   child: this.formEdit.get('child').value,
    //   price: this.formEdit.get('price').value
    // })
    // .subscribe(
    //   res => {
    //     console.log(res)
    //     this.toast.show('Edit room success', 'EDIT ROOM', {status:'success'})
    //     this.router.navigateByUrl('/home/room/details/' + this.id)
    //   },
    //   err => {
    //     console.log(err)
    //     this.dialog.open(DialogResultComponent, {
    //       context: {
    //         title: 'Error when update',
    //         content: err.error
    //       }
    //     })
    //   }
    // )
  }
}
