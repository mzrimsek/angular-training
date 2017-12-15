import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MediaComponent } from './features/media/media.component';
import { GameComponent } from './features/game/game.component';
import { ShoppingComponent } from './features/shopping/shopping.component';
import { FormsStuffComponent } from './features/forms-stuff/forms-stuff.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'media',
  component: MediaComponent
},
{
  path: 'game',
  component: GameComponent
},
{
  path: 'shopping',
  component: ShoppingComponent
},
{
  path: 'misc',
  component: FormsStuffComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
