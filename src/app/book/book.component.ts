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

  @Output() rated = new EventEmitter<Book>();

  constructor(private ratingService: BookRatingService) {
  }

  ngOnInit() {
    this.rated = new EventEmitter<Book>();
  }

  rateUp() {
    const book = this.ratingService.rateUp(this.book);
    this.rated.emit(book);
    this.book = book;
  }

  rateDown() {
    const book = this.ratingService.rateDown(this.book);
    this.rated.emit(book);
    this.book = book;
  }
}
