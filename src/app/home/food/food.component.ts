import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-food',
  template: `
  <nb-layout>
    <nb-layout-column>
      <router-outlet></router-outlet>
    </nb-layout-column>
  </nb-layout>`
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
