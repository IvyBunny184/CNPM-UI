import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { TypeOfHallService } from '../../../service/type-of-hall.service';

@Component({
  selector: 'ngx-hall-type',
  templateUrl: './hall-type.component.html',
})
export class HallTypeComponent implements OnInit {
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
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Mã Loại sảnh',
        type: 'string',
        filter: false,
        editable: false
      },
      name: {
        title: 'Tên loại sảnh',
        type: 'string',
        filter: false
      },
      minPrice: {
        title: 'Giá tối thiểu',
        type: 'number',
        filter: false
      }
      // rooms : {
      //   title: 'Số phòng',
      //   type: 'number',
      //   valuePrepareFunction: (data: any[]) => {
      //     return data.length
      //   },
      //   filter: false,
      //   editable: false,
      //   addable: false,
      // }
    }
  }

  source: LocalDataSource = new LocalDataSource()
  constructor(
    private typeHallService: TypeOfHallService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: NbDialogService,
    private toast: NbToastrService
    ) { }

  ngOnInit(): void {
    this.loadSrc()
    this.route.paramMap.subscribe(params => {
      console.log(params.get('search'))
    })
  }

  loadSrc() {
    this.source.reset()
    this.typeHallService.List
    .subscribe(res => {
      this.source.load(res)
    })
  }

  onDeleteConfirm(event) {
    // this.dialog.open(DialogResultComponent, {
    //   context: {
    //     title: `Are you want to remove service?`,
    //     content: `Room Type id: ${event.data.id}`
    //   }
    // }).onClose.subscribe(result => {
    //   if(result) {
    //     this.typeHallService.remove(event.data.id)
    //     .subscribe(
    //       res => {
    //         this.loadSrc()
    //         this.showToast('Delete', 'Delete success', {status: 'success'})
    //       },
    //       err => {
    //         this.toast.show(err.error, 'Error', {status:'danger'})
    //       }
    //     )
    //   }
    // })
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove service?`,
        content: `Room Type id: ${event.data.id}`
      }
    }).onClose.subscribe(result => {
      if(result) {
        this.typeHallService.remove(event.data.id)
        this.loadSrc()
      }
    })
  }

  onEditConfirm(event) {
    // const val = this.validate(false, event.newData)
    // if(val.has(false)){
    //   this.dialog.open(DialogResultComponent, {
    //     context: {
    //       title: 'VALIDATION DATA',
    //       content: val.get(false)
    //     }
    //   })
    // }
    // else{
    //   this.typeHallService.update({id: event.newData.id, name: event.newData.name, minPrice: event.newData.minPrice })
    //   .subscribe(
    //     res => {
    //       event.confirm.resolve();
    //       this.loadSrc()
    //       this.showToast('Edit', 'Edit success', {status: 'success'})
    //     },
    //     err => {
    //       event.confirm.reject();
    //       this.toast.show('Error', err.error, {status: 'danger'})
    //     }
    //   )
    // }
    this.typeHallService.update({id: event.newData.id, name: event.newData.name, minPrice: event.newData.minPrice })
    this.loadSrc()
  }

  onAddConfirm(event) {
    // const val = this.validate(true, event.newData)
    // if(val.has(false)) {
    //   alert(val.get(false))
    // }
    // else{
    //   this.typeHallService.add(event.newData)
    //   .subscribe(
    //     res => {
    //       event.confirm.resolve();
    //       this.loadSrc()
    //       this.showToast('ADD', 'Add success', {status: 'success'})
    //     },
    //     err => {
    //       this.showToast('ADD', err.error, {status: 'danger'})
    //     }
    //   )
    // }
    this.typeHallService.add(event.newData)
      .subscribe(
        res => {
          event.confirm.resolve();
          this.loadSrc()
          this.showToast('ADD', 'Add success', {status: 'success'})
        },
        err => {
          this.showToast('ADD', err.error, {status: 'danger'})
        }
      )
  }

  // validate(isAdd:boolean, model: RoomType): Map<boolean,string> {
  //   const idLength = model.id.trim().length;
  //   const nameLength = model.nameType.trim().length;
  //   const result = new Map<boolean,string>();
  //   if(isAdd) {
  //     if(idLength<= 0) return result.set(false,"ID is required");
  //     else if (idLength >10) return result.set(false, "ID constain at most 10 characters");
  //     else if (!model.id.match('^[0-9A-Z]{4,10}$')) return result.set(false, 'Type ID is invalid');
  //   }
  //   if(nameLength<= 0) return result.set(false,"Name is required");
  //   else if (nameLength >30) return result.set(false, "Name constain at most 30 characters");
  //   return result.set(true,'')
  // }

  onSearch(query) {
    if(query.trim().length === 0) {
      this.loadSrc()
    }
    else {
      query = query.trim()
      this.source.setFilter([
        {
          field: 'id',
          search: query
        },
      ], false)
    }
  }

  showToast(title: string, content: string, option: any){
    this.toast.show(content, title, option)
  }
}
