import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './todo-list.component';

@NgModule({
   declarations: [TodoListComponent,],
  imports: [
  SharedModule
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
