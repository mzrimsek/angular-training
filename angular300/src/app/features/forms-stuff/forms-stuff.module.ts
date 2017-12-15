import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsStuffComponent } from './forms-stuff.component';
import { ReactiveExampleComponent } from './components/reactive-example/reactive-example.component';
import { TemplatedExampleComponent } from './components/templated-example/templated-example.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CommonModule as AppCommon } from '../../common/common.module';
import { LoginComponent } from './components/templated-example/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { AuthGuard, CanLeaveGuard } from './guards/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCommon,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthGuard, CanLeaveGuard],
  declarations: [FormsStuffComponent, ReactiveExampleComponent, TemplatedExampleComponent, LoginComponent, DetailsComponent]
})
export class FormsStuffModule { }
