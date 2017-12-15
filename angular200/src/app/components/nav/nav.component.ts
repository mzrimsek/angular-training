import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  routes: RouteEntry[] = [
    { caption: 'Home', router: ['home'] },
    { caption: 'Communication', router: ['communication'] },
    { caption: 'Counter', router: ['counter'] },
    { caption: 'Movies', router: ['movies'] }
  ];
}

interface RouteEntry {
  caption: string;
  router: string[];
}
