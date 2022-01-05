import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://github.com/IvyBunny184" target="_blank">AnhThu_Ivy</a></b> 2021
    </span>
    <div class="socials">
      <a href="https://github.com/IvyBunny184" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/Bunny.Ivy.418" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
