import { Book } from './book';
import { BookRatingService } from './book-rating.service';

fdescribe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '0000',
      title: 'Test Book',
      description: 'ABC',
      rating: 3
    };
  });

  describe('rateUp', () => {
    it('should always return a new book object', () => {
      const ratedBook = service.rateUp(book);
      expect(ratedBook).not.toBe(book);
    });

    it('should always rate up a book by one', () => {
      const ratedBook = service.rateUp(book);
      expect(ratedBook.rating).toBe(4);
    });

    it('should not be allowed to have a rating greater then 5', () => {
      book.rating = 5;
      const ratedBook = service.rateUp(book);
      expect(ratedBook.rating).toBe(5);
    });
  });

  describe('rateDown', () => {
    it('should always return a new book object', () => {
      const ratedBook = service.rateDown(book);
      expect(ratedBook).not.toBe(book);
    });

    it('should always rate down a book by one', () => {
      const ratedBook = service.rateDown(book);
      expect(ratedBook.rating).toBe(2);
    });


    it('should not be allowed to have a rating smaller then 1', () => {
      book.rating = 1;
      const ratedBook = service.rateDown(book);
      expect(ratedBook.rating).toBe(1);
    });
  });


});
