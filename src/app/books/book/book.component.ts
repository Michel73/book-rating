import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;

  @Output() rated = new EventEmitter<Book>(true);

  constructor(private ratingService: BookRatingService) {
  }

  ngOnInit() {
  }

  rateUp() {
    this.rated.emit(this.ratingService.rateUp(this.book));
  }

  rateDown() {
    this.rated.emit(this.ratingService.rateDown(this.book));
  }
}
