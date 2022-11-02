import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent  {

  @Output() sendItems = new EventEmitter<Array<string>>();

  public item: FormControl = new FormControl('');
  public items: Array<string> = [];


  constructor() { }


  addNewItem() {
   this.items.push(this.item.value);
   this.item.setValue('');
   this.sendItems.emit(this.items);
  }

}
