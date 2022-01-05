import { FoodService } from './../../../service/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../../../model/food.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { DialogResultComponent } from '../../../dialog/dialog-result/dialog-result.component';

@Component({
  selector: 'ngx-update-food',
  templateUrl: './update-food.component.html'
})
export class UpdateFoodComponent implements OnInit {
  form: FormGroup;
  food$: Observable<Food>;
  constructor(
    private fb: FormBuilder,
    private readonly foodService: FoodService,
    private readonly route: ActivatedRoute,
    private readonly dialog: NbDialogService,
    private readonly router: Router,
    private readonly toast: NbToastrService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.food$ = this.foodService.getByID(id);
    })
    this.food$.subscribe(s => {
      this.form = this.fb.group({
        name: [s.name, [
          Validators.required,
          Validators.maxLength(30)
        ]],
        describe: [s.describe, [
          Validators.required,
        ]],
        price: [s.price, [
          Validators.required,
          Validators.min(1)
        ]]
      })
    })
  }

  updateFood() {
    this.food$.subscribe((s) => {
      this.dialog.open(DialogResultComponent,{
        context: {
          title: `Cập nhật dịch vụ ${s.id}?`
        }
      }).onClose.subscribe(result => {
        if(result) {
          this.update();
          this.router.navigateByUrl(`/home/service/details/${s.id}`);
        }
      })
    });
    
  }

  update() {
    this.food$.subscribe(s => {
      s.name = this.form.get('name').value;
      s.describe = this.form.get('describe').value;
      s.price = this.form.get('price').value;
      // this.svService.updateService(s)
      // .subscribe(
      //   res => {
      //     this.toast.show('Edit success', 'EDIT', { status: 'success'})
      //     this.router.navigateByUrl('/home/service/details/' + s.id)
      //   },
      //   err => {
      //     this.dialog.open(DialogResultComponent, {
      //       context: {
      //         title: 'ERROR',
      //         content: err.error
      //       }
      //     })
      //   }
      // );
    })
  }

  loadSrc() {
    this.food$.subscribe(s => {
      this.form.get('name').setValue(s.name)
      this.form.get('price').setValue(s.price)
      this.form.get('describe').setValue(s.describe)
    })
  }

  getConfig(ctrl: string):boolean {
    return this.form.get(ctrl).invalid && this.form.get(ctrl).touched
  }
}
