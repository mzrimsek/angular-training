import { Action } from '@ngrx/store';

export const GIFT_SUGGESTED = '[App] Gifts - Suggested';
export const GIFT_PURCHASED = '[App] Gifts - Purchased';

let maxId = 500;
export class GiftSuggested implements Action {
  readonly type = GIFT_SUGGESTED;
  id: string;
  constructor(public name: string, public description: string) {
    this.id = (maxId++).toString();
  }
}

export class GiftPurchased implements Action {
  readonly type = GIFT_PURCHASED;
  constructor(public id: string) { }
}

export type AllActions = GiftSuggested | GiftPurchased;
