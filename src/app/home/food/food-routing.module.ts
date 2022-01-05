import { UpdateFoodComponent } from './update-food/update-food.component';
import { DetailFoodComponent } from './detail-food/detail-food.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { ListFoodComponent } from './list-food/list-food.component';
import { FoodComponent } from './food.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
    {
        path: '',
        component: FoodComponent,
        children: [
          {
            path:'',
            component: ListFoodComponent
          },
          {
            path: 'add',
            // canActivate: [AuthGuard],
            // data: {roles: ['MANAGER']},
            component: AddFoodComponent
          },
          {
            path: 'details/:id',
            component: DetailFoodComponent
          },
          {
            path: 'update/:id',
            // canActivate: [AuthGuard],
            // data: {roles: ['MANAGER']},
            component: UpdateFoodComponent
          }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FoodRoutingModule { }