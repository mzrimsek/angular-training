import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import * as appActions from '../../../actions';
import * as shoppingActions from '../actions';
import { Product } from '../reducers/productlist';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ShoppingInitializationEffects {

  @Effect() initialize$ = this.actions$
    .ofType(appActions.APP_INIT)
    .mergeMap(action => [
      new shoppingActions.LoadProducts()
    ]);

  @Effect() loadProducts$ = this.actions$
    .ofType(shoppingActions.LOAD_PRODUCTS)
    .switchMap(() => this.http.get<{ _data: Product[] }>(this.url)
      .map(d => d._data)
      .map(data => {
        return new shoppingActions.LoadProductsSucceeded(data);
      }));

  private url = environment.productsUrl;
  constructor(private actions$: Actions, private http: HttpClient) { }
}
