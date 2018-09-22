import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-test-suites',
  template: `
    <div class="container">
      <h1>Test Suites</h1>
    </div>
  `,
  styleUrls: [ './all-test-suites.component.scss' ]
})
export class AllTestSuitesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
