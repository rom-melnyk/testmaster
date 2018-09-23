import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-not-found',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h1>404</h1>
          <h2>Not found</h2>
          <div class="btn-group">
            <button class="btn btn-secondary" title="Go back" (click)="goBack();">&larr;</button>
            <a class="btn btn-secondary" routerLink="/" title="Go to main page">/</a>
          </div>
        </div>
        <div class="col-6">
          <span class="smile">:-(</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: [ './not-found.component.scss', ]
})
export class NotFoundComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
