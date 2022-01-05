import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-hall',
  template:`
  <nb-layout>
    <nb-layout-column>
      <router-outlet></router-outlet>
    </nb-layout-column>
  </nb-layout>`
})
export class HallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
