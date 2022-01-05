import { NbAuthService } from '@nebular/auth';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HallService } from '../../../service/hall.service';
import { Hall } from '../../../model/hall.model';

@Component({
  selector: 'ngx-hall-detail',
  templateUrl: './hall-detail.component.html', 
})
export class HallDetailComponent implements OnInit {
  hall: Hall
  
  constructor(
    private hallService: HallService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: NbDialogService,  
    private toast: NbToastrService,
    private authService: NbAuthService
  ) { }

  ngOnInit(): void { 
    this.loadRoom() 
     
  }           

  loadRoom() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.hallService.getById(id)
      .subscribe(res => {
        this.hall = res 
      })
    })
  }
  onUpdate() {
    this.router.navigateByUrl('/home/hall/edit/' + this.hall.id)
  }

  editImg() {
    this.router.navigateByUrl('/home/hall/img/' + this.hall.id)
  }

  onRemove() {
    // this.hallService.deletehall(this.hall.id)
    // .subscribe(
    //   res => {
    //     this.toast.show('Remove', 'Remove room success', { status: 'primary'})
    //     this.router.navigateByUrl('/home/room')
    //   },
    //   err => {
    //     this.dialog.open(DialogResultComponent, {
    //       context: { 
    //         title: 'Error when remove',
    //         content: err.error
    //       }
    //     })
    //   }
    // )
    this.hallService.remove(this.hall.id)
    this.router.navigateByUrl('/home/hall')
  }

}
