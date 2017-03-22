import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rows = [];
  loadingIndicator: boolean = true;

  columns = [{prop: 'name'}];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 200);
    });
  }

  fetch(cb) {
    cb([{name: 'Bob'}]);
  }
}