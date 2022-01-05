import { HallService } from './../../../service/hall.service';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-hall-management',
  templateUrl: './hall-management.component.html',
})
export class RoomManagementComponent implements OnInit {
  settings = {
    actions:{
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: 'Room ID',
        type: 'string',
        filter: true
      },
      name: {
        title: 'Room name',
        type: 'string',
        filter: true
      },
      typeId: {
        title: 'Room type',
        type: 'string',
        // valuePrepareFunction: (data: any) => {
        //   return data.nameType
        // },
        // filterFunction(cell: RoomType, search: string): boolean {   
        //   if (search === '' || cell.id.includes(search) || cell.nameType.toLowerCase().includes(search.toLowerCase())) {
        //     return true;
        //   } else {
        //     return false;
        //   }     
        // }
      },
      maxTables: {
        title: 'Số bàn tối đa',
        type: 'number'
      },
      price: {
        title: 'Price per day',
        type: 'number',
        filter: true,
        valuePrepareFunction: (data: any) => {
          return data + ' $'
        }
      }
    }
  }

  source: LocalDataSource = new LocalDataSource();
  constructor(
    private readonly hallService: HallService, 
    private router: Router,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.loadSrc()
    this.route.queryParams.subscribe(params => {
      if(params.search != null) { this.onSearch(params.search)}
    })
  }

  loadSrc() {
    this.source.reset()
    this.hallService.List
    .subscribe(res => this.source.load(res))
  }

  selectRoom(hall: any):void {
    this.router.navigateByUrl("/home/hall/details/"+ hall.data.id)
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
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
