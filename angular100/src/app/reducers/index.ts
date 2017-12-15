import * as fromGifts from './gifts';
import { createSelector } from '@ngrx/store';
import { GiftItem } from '../components/gift-giving/models';

export interface State {
  gifts: fromGifts.State;
}

export const reducers = {
  gifts: fromGifts.reducer
};

// Selectors
const selectGifts = (state: State) => state.gifts;
const selectGiftIds = createSelector(selectGifts, (gifts) => gifts.allIds);
const selectGiftEntities = createSelector(selectGifts, (gifts) => gifts.entities);

export const selectGiftList = createSelector(
  selectGiftIds,
  selectGiftEntities,
  (ids, entities) => ids.map(i => <GiftItem>entities[i]));
