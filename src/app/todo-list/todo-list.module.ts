import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './todo-list.component';
import { NbDialogModule } from '@nebular/theme';

@NgModule({
   declarations: [TodoListComponent,],
  imports: [
  SharedModule,
  NbDialogModule.forRoot(),
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
