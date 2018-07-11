import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  private maxRating = 5;
  private minRating = 1;

  constructor() { }

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: Math.min(this.maxRating, book.rating + 1)
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(this.minRating, book.rating - 1)
    };
  }
}
