import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import imports from './imports';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // imports: imports,
  imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
