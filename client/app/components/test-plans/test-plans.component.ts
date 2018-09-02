import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-test-plans',
  template: `
    <div class="container">
      <h1>Test Plans</h1>
    </div>
  `,
  styleUrls: [ './test-plans.component.scss' ]
})
export class TestPlansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
