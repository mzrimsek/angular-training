export interface MovieListItem {
  id: string;
  title: string;
  releaseDate: string;
  purchased: boolean;
}

export interface MovieSummary {
  totalMovies: number;
  totalPurchased: number;
  totalUnpurchased: number;
}
