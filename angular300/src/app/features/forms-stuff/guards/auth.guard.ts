import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router/src/interfaces';
import { DetailsComponent } from '../components/details/details.component';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}

@Injectable()
export class CanLeaveGuard implements CanDeactivate<DetailsComponent> {
  canDeactivate(component: DetailsComponent, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (component.canLeave) {
      return true;
    } else {
      component.message = 'Click the toggle button first!';
      return false;
    }
  }

}
