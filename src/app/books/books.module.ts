import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { BooksRoutingModule } from './books-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookRatingService } from './shared/book-rating.service';
import { BookStoreService } from './shared/book-store.service';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  providers: [
    BookStoreService,
    BookRatingService
  ]
})
export class BooksModule { }
