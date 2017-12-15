import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItems from './items';
import * as fromLoans from './loans';
import { MediaListItem } from '../models';

export interface MediaLibraryState {
  items: fromItems.State;
  loans: fromLoans.State;
}

export interface State {
  mediaLibrary: MediaLibraryState;
}

export const reducers: ActionReducerMap<MediaLibraryState> = {
  items: fromItems.reducer,
  loans: fromLoans.reducer
};

export const _selectMediaLibrary = createFeatureSelector<MediaLibraryState>('mediaLibrary');

export const _selectMediaLibraryItems = createSelector(_selectMediaLibrary, state => state.items);
export const _selectMediaLibraryLoans = createSelector(_selectMediaLibrary, state => state.loans);

export const { selectAll: _selectAllMediaItems } = fromItems.adapter.getSelectors(_selectMediaLibraryItems);
export const { selectAll: _selectAllLoanItems } = fromLoans.adapter.getSelectors(_selectMediaLibraryLoans);

export const selectAllMediaItems = createSelector(_selectAllMediaItems, _selectAllLoanItems, (items, loans) => items.map(item => {
  const loanRecords: string[] = loans.filter(loan => loan.id === item.id).map(loan => loan.name);
  const onloan = loanRecords.length > 0 ? loanRecords[0] : null;
  return <MediaListItem>{
    // id: item.id,
    // summary: item.summary,
    // title: item.title,
    // format: item.format,
    // type: item.format,
    ...item,
    status: onloan ? 'loaned' : 'in-library',
    onloan
  };
}));
