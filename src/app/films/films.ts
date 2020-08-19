import film from './film';

export interface Films {
  count: number,
  next: any,
  previous: any,
  results: film[]
}
