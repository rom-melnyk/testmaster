import {
  Directive,
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ContentChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { wait } from '../../../../../shared/utils';

@Directive({
  selector: '[tm-tab]'
})
export class TabContentDirective {
  @Input() name: string;
  @Input() active = false;

  constructor(
    public el: ElementRef,
  ) {}
}

@Component({
  selector: 'tm-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" *ngFor="let tab of tabNames; let i = index;">
        <a href="javascript://" class="nav-link" [class.active]="activeIndex === i" (click)="setActive(i)">
          {{tab}}
        </a>
      </li>
    </ul>
    <div class="active-tab-content"></div>
  `,
  styles: [
    `ul.nav.nav-tabs {
      margin-bottom: .25rem;
    }`,
    `.active-tab-content {
      margin-bottom: 1rem;
    }`,
  ]
})
export class TabsComponent implements OnInit, AfterViewInit {
  public tabNames: string[] = [];
  public activeIndex = 0;
  @ContentChildren(TabContentDirective) private tabContents: QueryList<TabContentDirective>;
  private activeTabContainer: HTMLElement = null;

  constructor(
    private host: ElementRef,
  ) { }

  ngOnInit() {
    this.activeTabContainer = this.host.nativeElement.querySelector('.active-tab-content');
  }

  ngAfterViewInit() {
    console.log(this.tabContents.toArray());
    wait()
      .then(() => {
        const tabs: string[] = [];
        let activeIndex = 0;
        this.tabContents.forEach((tabContent: TabContentDirective, idx) => {
          tabs.push(tabContent.name || 'undefined');
          if (tabContent.active) {
            activeIndex = idx;
          }
        });
        this.tabNames = tabs;
        this.setActive(this.activeIndex);
      })
      .catch(console.error);
  }

  setActive(i: number) {
    this.activeIndex = i;
    const activeContent: HTMLElement = (<ElementRef>this.tabContents.toArray()[i].el).nativeElement;
    while (this.activeTabContainer.childNodes.length > 0) {
      this.activeTabContainer.removeChild(this.activeTabContainer.childNodes[0]);
    }
    this.activeTabContainer.appendChild(activeContent);
  }
}
