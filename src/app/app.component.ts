import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title;
  constructor() {
    this.title = 'Book Rating';

  }
}
