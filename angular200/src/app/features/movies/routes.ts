import { Route } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { EntryComponent } from './entry/entry.component';
import { ListComponent } from './list/list.component';

export const routes: Route[] = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: 'new',
        component: EntryComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  }
];
