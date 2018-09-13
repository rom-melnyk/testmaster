import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-not-found',
  template: `
    <div class="container"><div class="row">
      <div class="col-6">
        <h1>404</h1>
        <h2>Not found</h2>
        <div class="btn-group">
          <a class="btn btn-secondary" routerLink="/">To main page</a>
          <a class="btn btn-secondary" href="javascript://" (click)="onBackClick();">&larr; Back</a>
        </div>
      </div>
      <div class="col-6">
        <span class="smile">:-(</span>
      </div>
    </div></div>
  `,
  styleUrls: [ './not-found.component.scss', ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onBackClick() {
    history.back();
  }
}
