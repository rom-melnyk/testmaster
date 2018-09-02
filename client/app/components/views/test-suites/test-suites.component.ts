import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-test-suites',
  template: `
    <div class="top-level-container">
      <h1>Test Suites</h1>
    </div>
  `,
  styleUrls: [ './test-suites.component.scss' ]
})
export class TestSuitesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
