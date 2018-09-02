import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-footer',
  template: `
    <footer class="bg-dark text-light">
      <div class="container">
        <img class="logo" src="/assets/gfx/logo.svg" alt="TestMaster &copy; 2018">
        TestMaster &copy; 2018
      </div>
    </footer>
  `,
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
