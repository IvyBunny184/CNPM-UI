import { HallDetailComponent } from './hall-detail/hall-detail.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbActionsModule, NbAlertModule, NbButtonModule, NbDatepickerModule, NbLayoutModule, NbListModule, NbRadioModule, NbSelectModule, NbSidebarModule, NbUserModule, NbProgressBarModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HallRoutingModule } from './hall-routing.module';
import { HallComponent } from './hall.component';
import { RoomManagementComponent } from './hall-management/hall-management.component';
import { HallTypeComponent } from './hall-type/hall-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { DialogModule } from '../../dialog/dialog.module';
import { ImageHallComponent } from './image-hall/image-hall.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AddHallComponent } from './add-hall/add-hall.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { UpdateHallComponent } from './update-hall/update-hall.component';


@NgModule({
  declarations: [HallComponent, RoomManagementComponent, AddHallComponent, HallTypeComponent, HallDetailComponent, ImageHallComponent, UpdateHallComponent],
  imports: [
    CommonModule,
    HallRoutingModule,
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
    NbProgressBarModule,
    NgxDropzoneModule,
    NgxGalleryModule,
    CKEditorModule
  ]
})
export class HallModule { }
