import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { Food } from '../../../model/food.model';
import { FoodService } from '../../../service/food.service';

@Component({
  selector: 'ngx-detail-food',
  templateUrl: './detail-food.component.html'
})
export class DetailFoodComponent implements OnInit {
  food$: Observable<Food>;
  canEdit: boolean = true;
  constructor(
    private route: ActivatedRoute, 
    private foodService: FoodService,
    private dialog: NbDialogService,
    private router: Router,
    private authService: NbAuthService
  ) { }

  ngOnInit(): void {
    this.food$ = this.foodService.getByID('FD001')
  }

  onUpdate(id: string) {
    this.router.navigateByUrl(`/home/food/update/${id}`)
  }

  onRemove(id: string) {
    this.dialog.open(DialogResultComponent, {
      context: {
        title: `Are you want to remove food?`,
        content: `Food id: ${id}`
      }
    })
    // this.dialog.open(DialogResultComponent, {
    //   context: {
    //     title: `Are you want to remove service?`,
    //     content: `Service id: ${id}`
    //   }
    // }).onClose.subscribe(result => {
    //   if(result) {
    //     this.svService.removeService(id)
    //     this.router.navigateByUrl("/home/service")
    //   }
    // })
  }
}
