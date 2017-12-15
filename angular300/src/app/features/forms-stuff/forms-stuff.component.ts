import { Component, OnInit } from '@angular/core';
import { RouteEntry } from '../../common/components/nav/nav.component';

@Component({
  selector: 'app-forms-stuff',
  templateUrl: './forms-stuff.component.html',
  styleUrls: ['./forms-stuff.component.css']
})
export class FormsStuffComponent implements OnInit {

  routes: RouteEntry[] = [
    {
      caption: 'Templated',
      router: ['templated'],
      exact: true
    },
    {
      caption: 'Reactive',
      router: ['reactive'],
      exact: true
    },
    {
      caption: 'All About Joe',
      router: ['details', 'joe-schmidt'],
      exact: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
