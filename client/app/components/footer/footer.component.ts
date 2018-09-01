import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-footer',
  template: `
    <footer>
      TestMaster &copy; 2018
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
