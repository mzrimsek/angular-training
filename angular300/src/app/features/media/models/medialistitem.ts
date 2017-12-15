export interface MediaListItem {
  id: string;
  title: string;
  summary: string;
  type: MediaType;
  status: 'in-library' | 'loaned' | 'missing';
  format: string;
  onloan: null | string;
}

export type MediaType = 'book' | 'game' | 'music';
