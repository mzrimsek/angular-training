export interface Book {
  id: string;
  title: string;
  author: string;
}

export interface BookApiResult {
  '_data': Book[];
}
