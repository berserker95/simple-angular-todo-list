import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ListItem } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent  {
  @Input() items: Array<ListItem> = [];
  @Output() sendItems = new EventEmitter<Array<ListItem>>();

  public item: FormControl = new FormControl('');

  constructor() { }

 addNewItem() {
  (this.item.value.trim().length != 0 && this.items.findIndex(item => item.value === this.item.value.trim()) === -1) && (this.items.push({value: this.item.value.trim(), completed: false}), localStorage.setItem('todoList', JSON.stringify(this.items)));
   this.item.setValue('');
   this.sendItems.emit(this.items);
  }

}
