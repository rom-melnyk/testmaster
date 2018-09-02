import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-home',
  template: `
    <div class="container">
      <h1>TestMaster</h1>
    </div>
  `,
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
