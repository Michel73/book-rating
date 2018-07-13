import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookRatingService } from '../shared/book-rating.service';
import { BookComponent } from './book.component';

fdescribe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  const ratingMock = {
    rateUp: () => {
    }
  };

  beforeEach(async(() => {
    spyOn(ratingMock, 'rateUp').and.callThrough();
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      // schemas: [
      // NO_ERRORS_SCHEMA
      // ],
      providers: [{
        provide: BookRatingService,
        useValue: ratingMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '000',
      title: '',
      description: '',
      rating: 1
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('rateUp', () => {
    beforeEach(async(() => {

    }));

    xit('should forward hte rateUp call to the service', () => {
      component.rateUp();
      expect(ratingMock.rateUp).toHaveBeenCalled();
    });

    it('should call the service when the button is clicked', () => {
      const rateUpButton = fixture.debugElement.query(By.css('[testRateUpButton]')).nativeElement as HTMLButtonElement;

      rateUpButton.click();

      expect(ratingMock.rateUp).toHaveBeenCalled();
    });

    xit('should increment the rating of a book', () => {
      component.rateUp();
    });
  });
});
