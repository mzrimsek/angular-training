import * as fromGifts from '../components/gift-giving/actions/gifts';
import { tassign } from 'tassign';

export interface Gift {
  id: string;
  recipient: string;
  description: string;
}

export interface State {
  allIds: string[];
  entities: { [key: string]: Gift };
  purchasedIds: string[];
}

const initialState: State = {
  allIds: ['1', '2'],
  entities: {
    '1': { id: '1', recipient: 'Zac', description: 'Taco Bell Gift Card' },
    '2': { id: '2', recipient: 'David', description: 'Battlefront 2' }
  },
  purchasedIds: []
};

export const reducer = (state: State = initialState, action: fromGifts.AllActions): State => {
  switch (action.type) {
    case fromGifts.GIFT_SUGGESTED: {
      const newGift: Gift = { id: action.id, description: action.description, recipient: action.name };
      return {
        allIds: [...state.allIds, action.id],
        entities: { ...state.entities, [action.id]: newGift },
        purchasedIds: state.purchasedIds
      };
    }
    case fromGifts.GIFT_PURCHASED: {
      return tassign(state, { purchasedIds: [...state.purchasedIds, action.id] });
    }
    default: {
      return state;
    }
  }
};
