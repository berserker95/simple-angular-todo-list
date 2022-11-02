import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() items: Array<string> = [];

  public isEdit: boolean = false;
  public currentElementId: number | null = null;
  public currentElement: FormControl = new FormControl('');
  constructor() { }

  toggle(checked: boolean, i: number) {
    let item: HTMLElement = document.getElementById(`item#${i}`) as HTMLElement;
    checked ? item.classList.add('strikethrough') : item.classList.remove('strikethrough');
  }

  // The function below is called when the user clicks on edit icon
  editItem(index: number) {
    this.isEdit = true;
    this.currentElementId = index;
    this.currentElement.setValue(this.items[index]);
  }

  saveNewItem(index: number) {
    if(this.currentElement?.status !== 'INVALID') {
       this.items[index] = this.currentElement.value;
       this.isEdit = false;
    }
  }

  onBlur(index: number) {
    this.isEdit = false;
    this.currentElement?.status !== 'INVALID' && this.saveNewItem(index);
  }
}

