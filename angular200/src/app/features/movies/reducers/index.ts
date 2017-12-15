import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './movies';
import * as fromPuchased from './purchased';
import { MovieListItem, MovieSummary } from '../models';

export interface MovieState {
  list: fromList.State;
  purchased: fromPuchased.State;
}

export interface State {
  movies: MovieState;
}

export const reducers: ActionReducerMap<MovieState> = {
  list: fromList.reducer,
  purchased: fromPuchased.reducer
};

const selectMovies = createFeatureSelector<MovieState>('movies');
const selectMovieList = createSelector(selectMovies, state => state.list);
const selectPurchased = createSelector(selectMovies, state => state.purchased);

// const selectMovieIds = createSelector(selectMovieList, movies => movies.ids);
// const selectMovieEntities = createSelector(selectMovieList, movies => movies.entities);

// export const selectMovieSummaryList = createSelector(selectMovieIds, selectMovieEntities, (ids, entities) => {
//   return ids.map(i => entities[i]);
// });
const { selectAll: selectAllMovies, selectTotal: selectTotalNumberOfMovies } = fromList.adapter.getSelectors(selectMovieList);
const selectPurchasedIds = createSelector(selectPurchased, purchased => purchased.ids);
const selectNumberOfPurchased = createSelector(selectPurchasedIds, ids => ids.length);

export const selectIsLoading = createSelector(selectMovieList, movies => movies.loading);
export const selectFilterBy = createSelector(selectMovieList, movies => movies.filterBy);

export const selectAllMovieListItemsUnfiltered = createSelector(selectAllMovies, selectPurchasedIds,
  (movies, ids) => movies.map(movie => {
    return <MovieListItem>{
      id: movie.id,
      title: movie.title,
      releaseDate: movie.releaseDate,
      purchased: ids.some(id => id === movie.id)
    };
  }));

export const selectAllMovieListItems = createSelector(selectAllMovieListItemsUnfiltered, selectFilterBy,
  (movies, filterBy) => {
    switch (filterBy) {
      case 'all': {
        return movies;
      }
      case 'purchased': {
        return movies.filter(movie => movie.purchased);
      }
      case 'unpurchased': {
        return movies.filter(movie => !movie.purchased);
      }
    }
  });

export const selectSummary = createSelector(selectTotalNumberOfMovies, selectNumberOfPurchased, (total, purchased) => {
  return <MovieSummary>{
    totalMovies: total,
    totalPurchased: purchased,
    totalUnpurchased: total - purchased
  };
});
