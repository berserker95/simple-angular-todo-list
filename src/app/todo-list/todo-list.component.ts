import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() items: Array<string> = [];


  constructor() { }

  toggle(checked: boolean, i: number) {
    let item: HTMLElement = document.getElementById(`item#${i}`) as HTMLElement;
    checked ? item.classList.add('strikethrough') : item.classList.remove('strikethrough');
  }
}
