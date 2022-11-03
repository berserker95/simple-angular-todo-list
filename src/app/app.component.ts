import { Component, OnInit } from '@angular/core';

import { ListItem } from './shared/interfaces/interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'My Todo List';
  public items: Array<ListItem> =  [];

  ngOnInit() {
    this.items = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList') as  string) : [];
  }

  onSendItems(items: Array<ListItem>) {
    this.items = items;
  }
}
