import { FoodService } from './../../../service/food.service';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-list-food',
  templateUrl: './list-food.component.html'
})
export class ListFoodComponent implements OnInit {
  settings = {
    actions:{
      add: false,
      edit: false,
      delete:false
    },
    columns: {
      id: {
        title: 'ID',
        type: 'string',
        filter: true
      },
      name: {
        title: 'Tên món ăn',
        type: 'string',
        filter: true
      },
      price: {
        title: 'Giá',
        type: 'number',
        filter: true,
        valuePrepareFunction: (data) => {
          return data + ' $'
        }
      }
    }
  }
  source: LocalDataSource = new LocalDataSource()
  constructor(
    private foodService: FoodService,    
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadSrc()
    this.route.queryParams.subscribe(params => {
      if(params.search != null) { this.onSearch(params.search)}
    })
  }

  loadSrc() {
    this.foodService.List.subscribe(src => {
      this.source.load(src);
    })
  }

  rowSelect(row: any):void {
    this.router.navigateByUrl('/home/food/details/' + row.data.id)
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
