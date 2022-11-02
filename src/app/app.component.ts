import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'My Todo List';
  public items: Array<string> = [];

  onSendItems(items: Array<string>) {
    this.items = items;
  }
}
