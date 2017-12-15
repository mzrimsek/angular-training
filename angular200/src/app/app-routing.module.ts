import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CommunicationComponent } from './features/communication/communication.component';
import { CounterComponent } from './features/counter/counter.component';
import { MoviesComponent } from './features/movies/movies.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'communication',
    component: CommunicationComponent,
    pathMatch: 'full'
  },
  {
    path: 'counter',
    component: CounterComponent,
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    // component: HomeComponent
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
