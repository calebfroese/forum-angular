import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'">
      </ngx-datatable>
    </div>
  `
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