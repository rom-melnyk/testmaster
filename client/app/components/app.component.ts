import { Component } from '@angular/core';

@Component({
  selector: 'tm-root',
  template: `
    <tm-header></tm-header>
    <router-outlet></router-outlet>
    <tm-footer></tm-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'TestMaster';
}
