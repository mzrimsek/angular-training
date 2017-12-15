import { Action } from '@ngrx/store';
import { Movie } from '../reducers/movies';

export const MOVIE_TICKET_PURCHASED = '[Movies] Ticket Purchased';
export class MovieTicketPurchased implements Action {
  readonly type = MOVIE_TICKET_PURCHASED;
  constructor(public movie: Movie) { }
}

export const MOVIE_TICKET_PURCHASE_FAILED = '[Movie] Ticket Purchase Failed';
export class MovieTicketPurchaseFailed implements Action {
  readonly type = MOVIE_TICKET_PURCHASE_FAILED;
  constructor(public movie: Movie) { }
}

export const PURCHASED_LOAD_SUCCEEDED = '[Movies] Purchased Load Succeeded';
export class PurchasedLoadSucceeded implements Action {
  readonly type = PURCHASED_LOAD_SUCCEEDED;
  constructor(public ids: string[]) { }
}

export type All = MovieTicketPurchased | PurchasedLoadSucceeded | MovieTicketPurchaseFailed;
