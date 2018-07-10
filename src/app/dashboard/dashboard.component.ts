import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [{
      title: 'Angular',
      isbn: '123',
      rating: 1,
      description: 'about Angular'
    },
    {
      title: 'AngularJS',
      isbn: '1234',
      rating: 5,
      description: 'about AngularJS'
    },
    {
      title: 'Star Wars',
      isbn: '5678',
      rating: 3,
      description: 'Darth Vador is back'
    }];
  }

}
