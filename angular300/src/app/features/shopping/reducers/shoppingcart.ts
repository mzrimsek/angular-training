import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions';

export interface CartItem {
  id: string;
  quantity: number;
}

export interface State extends EntityState<CartItem> { }

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>();
const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ADD_ITEM_TO_CART: {
      if (state.entities[action.item.id]) {
        return adapter.updateOne({
          id: action.item.id,
          changes: {
            quantity: state.entities[action.item.id].quantity + 1
          }
        }, state);
      } else {
        return adapter.addOne({ id: action.item.id, quantity: 1 }, state);
      }
    }
    case actions.REMOVE_ITEM_FROM_CART: {
      if (action.item.quantity === 1) {
        return adapter.removeOne(action.item.id, state);
      } else {
        return adapter.updateOne({
          id: action.item.id,
          changes: {
            quantity: state.entities[action.item.id].quantity - 1
          }
        }, state);
      }
    }
    default: {
      return state;
    }
  }
}
