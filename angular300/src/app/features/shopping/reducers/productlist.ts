import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions';
import { ProductListItem } from '../models/index';
import { Update } from '@ngrx/entity/src/models'; // this is a weird bug I guess? Putting this in the top level import gives an error
import { tassign } from 'tassign';

export interface Product {
  id: string;
  description: string;
  price: number;
  inventory: number;
}

export interface State extends EntityState<Product> {
  loaded: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
const initialState: State = adapter.getInitialState({
  loaded: false
});

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.LOAD_PRODUCTS_SUCCEEDED: {
      const tempState = adapter.addAll(action.products, state);
      return tassign(tempState, { loaded: true });
    }
    case actions.ADD_ITEM_TO_CART: {
      const update: Update<Product> = {
        id: action.item.id,
        changes: {
          inventory: state.entities[action.item.id].inventory - 1
        }
      };
      return adapter.updateOne(update, state);
    }
    case actions.REMOVE_ITEM_FROM_CART: {
      const update: Update<Product> = {
        id: action.item.id,
        changes: {
          inventory: state.entities[action.item.id].inventory + 1
        }
      };
      return adapter.updateOne(update, state);
    }
    default: {
      return state;
    }
  }
}
