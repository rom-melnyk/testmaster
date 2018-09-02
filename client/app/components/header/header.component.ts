import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-header',
  template: `
    <header class="bg-dark text-light">
      <div class="container">
        TestMaster &copy; 2018
      </div>
    </header>
  `,
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
