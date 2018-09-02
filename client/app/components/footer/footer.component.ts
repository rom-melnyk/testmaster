import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-footer',
  template: `
    <footer class="bg-dark text-light">
      <div class="container">
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
