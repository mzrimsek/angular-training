import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CommonModule } from '../../common/common.module';

import { ShoppingComponent } from './shopping.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SummaryComponent } from './components/summary/summary.component';

import { reducers } from './reducers';
import { ShoppingInitializationEffects } from './effects/initialization.effects';

@NgModule({
  imports: [
    AngularCommon,
    StoreModule.forFeature('shopping', reducers),
    EffectsModule.forFeature([ShoppingInitializationEffects]),
    CommonModule
  ],
  declarations: [ShoppingComponent, ProductListComponent, ShoppingCartComponent, SummaryComponent]
})
export class ShoppingModule { }
