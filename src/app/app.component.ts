import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
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
      }, 500);
    });
  }

  fetch(cb) {
    cb([{name: 'Bob'}]);
  }
}