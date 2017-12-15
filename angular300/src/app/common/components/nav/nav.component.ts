import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-common-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  @Input() stacked = false;
  @Input() routes: RouteEntry[] = [];
  constructor() { }

  ngOnInit() {
  }

}

export interface RouteEntry {
  caption: string;
  router: string[];
  exact: boolean;
}
