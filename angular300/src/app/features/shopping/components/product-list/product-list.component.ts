import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { ProductListItem } from '../../models';
import * as actions from '../../actions';

@Component({
  selector: 'app-shopping-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductListItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() { }

  addToCart(item: ProductListItem) {
    this.store.dispatch(new actions.AddItemToCart(item));
  }

}
