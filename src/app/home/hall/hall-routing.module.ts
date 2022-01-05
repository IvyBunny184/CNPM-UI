import { HallDetailComponent } from './hall-detail/hall-detail.component';
import { ImageHallComponent } from './image-hall/image-hall.component';
import { HallTypeComponent } from './hall-type/hall-type.component';
import { UpdateHallComponent } from './update-hall/update-hall.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { RoomManagementComponent } from './hall-management/hall-management.component';
import { HallComponent } from './hall.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: HallComponent,
    children: [
      {
        path:'',
        component: RoomManagementComponent
      },
      {
        path: 'details/:id',
        component: HallDetailComponent
      },
      {
        path:'add',
        // canActivate: [AuthGuard],
        // data: {roles: ['MANAGER']},
        component: AddHallComponent
      },
      {
        path:'edit/:id',
        // canActivate: [AuthGuard],
        // data: {roles: ['MANAGER']},
        component: UpdateHallComponent
      },
      {
        path:'img/:id',
        // canActivate: [AuthGuard],
        // data: {roles: ['MANAGER']},
        component: ImageHallComponent
      },
      {
        path:'type',
        // canActivate: [AuthGuard],
        // data: {roles: ['MANAGER']},
        component: HallTypeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HallRoutingModule { }
