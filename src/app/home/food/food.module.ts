import { FoodRoutingModule } from './food-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFoodComponent } from './list-food/list-food.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { DetailFoodComponent } from './detail-food/detail-food.component';
import { FoodComponent } from './food.component';
import { NbActionsModule, NbAlertModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbRadioModule, NbSelectModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { DialogModule } from '../../dialog/dialog.module';



@NgModule({
  declarations: [ListFoodComponent, AddFoodComponent, UpdateFoodComponent, DetailFoodComponent, FoodComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    NbCardModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbSelectModule,
    NbRadioModule,
    NbDatepickerModule,
    DialogModule,
    NbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NbListModule,
    ThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    CKEditorModule
  ]
})
export class FoodModule { }
