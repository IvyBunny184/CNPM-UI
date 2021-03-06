import { HallService } from './../../../service/hall.service';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  NbToastrService, NbDialogService } from '@nebular/theme';
import 'firebase/storage';
import { NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { ImageOfHall } from '../../../model/image-of-hall.model';

@Component({
  selector: 'ngx-image-hall',
  templateUrl: './image-hall.component.html',
  styles: ['.ngx-gallery { display: inline-block; margin-bottom: 20px; }']
})
export class ImageHallComponent implements OnInit {
  hallId: string
  progress: number;
  listImg: ImageOfHall[];
  files: File[] = [];
  galleryImages: NgxGalleryImage[];
  galleryOptions = [
    {
      width: '100%',
      height: '600px',
      thumbnailsColumns: 4,
      arrowPrevIcon: 'fa fa-chevron-left',
      arrowNextIcon: 'fa fa-chevron-right',
      imageAnimation: NgxGalleryAnimation.Rotate,
      imageSwipe: true,
      thumbnailActions: [{icon: 'fa fa-times-circle', onClick: this.deleteImage.bind(this), titleText: 'delete'}]
    },
    // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20,
      imageSwipe: true
    },
    // max-width 400
    {
      breakpoint: 400,
      preview: false,
      imageSwipe: true
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private toastr: NbToastrService,
    private hallService: HallService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private dialog: NbDialogService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.hallId = params.id
      this.loadData()
    })
  }

  loadData() {
    this.hallService.getListImg(this.hallId).subscribe(res => {
      this.listImg = res
      this.galleryImages = []
      res.forEach(img => {
        this.galleryImages.push({
          small: img.url,
          medium: img.url,
          big: img.url,
        })
      })
    })
  }

  upload(file: File, index: number) {
    // const path = `imgsroom/${this.roomID}/${Date.now()}_${file.name}`;
    // const ref = this.storage.ref(path);
    // let task = this.storage.upload(path, file);
    // task.percentageChanges().subscribe(res => this.progress = res)
    // task.snapshotChanges().pipe(
    //   finalize(() => {
    //     ref.getDownloadURL().subscribe(res => {
    //       this.hallService.addImage(this.roomID, res).subscribe(
    //         res => {
    //           this.loadData();
    //           this.files.splice(this.files.indexOf(file), 1)
    //         },
    //         err => this.toastr.show(err.error, 'UPLOAD', {status:'danger'})
    //       )
    //     })
    //   })
    // ).subscribe();
  }

  onSelect(event) {
    this.files.push(...event.addedFiles)
	}

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
	}

  submitUpload() {
    this.files.forEach((file,index) => this.upload(file, index))
  }

  disabledBtn() {
    return this.files.length <= 0;
  }

  deleteImage(event, index): void {
    // this.dialog.open(DialogResultComponent, {
    //   context: {
    //     title: 'REMOVE IMAGE',
    //     content: 'Are you want to remove this image?'
    //   }
    // }).onClose.subscribe(res => {
    //   if(res) {
    //     this.roomService.removeImage(this.listImg[index].url).subscribe(
    //       res => this.loadData(),
    //       err => {
    //         this.toastr.show('Error when remove image', 'ERROR', {status:'danger'})
    //         console.log(err)
    //       }
    //     )
    //   }
    // })
  }
}
