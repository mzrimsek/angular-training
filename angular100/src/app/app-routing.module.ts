import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { GiftGivingComponent } from './components/gift-giving/gift-giving.component';

const routes: Routes = [{
  path: '',
  component: TodoListComponent
},
{
  path: 'gifts',
  component: GiftGivingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
