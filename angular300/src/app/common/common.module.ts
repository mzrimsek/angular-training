import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { PluralizePipe } from './pipes/pluralize.pipe';

@NgModule({
  imports: [
    AngularCommon,
    RouterModule.forChild([])
  ],
  declarations: [NavComponent, PluralizePipe],
  exports: [NavComponent, PluralizePipe]
})
export class CommonModule { }
