import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-test-cases',
  template: `
    <div class="top-level-container">
      <h1>Test Cases</h1>
    </div>
  `,
  styleUrls: [ './test-cases.component.scss' ]
})
export class TestCasesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
