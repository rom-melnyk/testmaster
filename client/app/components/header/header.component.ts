import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-header',
  template: `
    <header>
      TestMaster &copy; 2018
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
