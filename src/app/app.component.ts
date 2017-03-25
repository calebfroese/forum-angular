import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('image') imageTpl: TemplateRef<any>;
  rows = [];
  loadingIndicator: boolean = true;
  columns: any[] = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  }

  ngOnInit() {
    this.columns = [
      {prop: 'image', cellTemplate: this.imageTpl}, {prop: 'name'},
      {name: 'POST', prop: 'post.title'}
    ];
  }

  fetch(cb) {
    cb([
      {
        image:
            'https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png',
        name: 'John',
        post: {title: 'A test post'}
      },
      {
        image:
            'https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295406_960_720.png',
        name: 'Bob',
        post: {title: 'Something interesting'}
      },
      {
        image:
            'https://upload.wikimedia.org/wikipedia/commons/0/07/Avatar_girl_face.png',
        name: 'Susan',
        post: {title: 'Hey guys, come check out this forum!'}
      }
    ]);
  }
}