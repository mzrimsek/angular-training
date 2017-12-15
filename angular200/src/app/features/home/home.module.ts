import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    // HttpClientModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
