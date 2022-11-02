import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';

import { SharedModule } from './../shared/shared.module';


@NgModule({
   declarations: [TodoComponent],
  imports: [
    SharedModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
