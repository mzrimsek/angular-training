import { Route } from '@angular/router';
import { FormsStuffComponent } from './forms-stuff.component';
import { ReactiveExampleComponent } from './components/reactive-example/reactive-example.component';
import { TemplatedExampleComponent } from './components/templated-example/templated-example.component';
import { DetailsComponent } from './components/details/details.component';
import { AuthGuard, CanLeaveGuard } from './guards/auth.guard';

export const routes: Route[] = [
  {
    path: 'misc',
    component: FormsStuffComponent,
    children: [
      {
        path: 'reactive',
        component: ReactiveExampleComponent
      },
      {
        path: 'templated',
        component: TemplatedExampleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'details/:name',
        component: DetailsComponent,
        canDeactivate: [CanLeaveGuard]
      }
    ]
  }
];
