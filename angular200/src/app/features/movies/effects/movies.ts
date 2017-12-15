import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions } from '@ngrx/effects';
import * as fromAppActions from '../../../actions';
import * as fromMovieActions from '../actions/movies';
import * as fromPurchasedActions from '../actions/purchased';
import { Movie } from '../reducers/movies';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieEffects {

  // @Effect({ dispatch: false }) logIt$ = this.actions$.do(action => console.log('Effect got the action of ', action.type));
  @Effect() getData$ =
    this.actions$
      .ofType(fromAppActions.LOAD_DATA)
      .switchMap(action => this.client.get<{ '_data': ApiMovie[] }>(environment.urls.movieListApi)
        .map(response => response._data)
        .mergeMap(movies => {
          const purchasedIds = movies.filter(movie => movie.purchased).map(movie => movie.id);
          return [
            new fromMovieActions.LoadDataSucceeded(movies),
            new fromPurchasedActions.PurchasedLoadSucceeded(purchasedIds)
          ];
        })
      );

  @Effect() markPurchased$ =
    this.actions$
      .ofType(fromPurchasedActions.MOVIE_TICKET_PURCHASED)
      .map(action => <Movie>action['movie'])
      .switchMap(movie => this.client.post(environment.urls.moviePurchaseApi, movie)
        .filter(x => false)
        .catch(err => Observable.of(new fromPurchasedActions.MovieTicketPurchaseFailed(movie)))
      );

  @Effect() showError$ =
    this.actions$
      .ofType(fromPurchasedActions.MOVIE_TICKET_PURCHASE_FAILED)
      .map((action: any) => new fromAppActions.ApplicationError(`Sorry, couldn't mark ${action.movie.title} as purchased.`));

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface ApiMovie extends Movie {
  purchased: boolean;
}

interface AddMovie {
  title: string;
  releaseDate: string;
}
