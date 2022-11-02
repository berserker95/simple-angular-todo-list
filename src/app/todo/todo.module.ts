import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';

import { NbCardModule, NbInputModule, NbFormFieldModule, NbIconModule, NbButtonModule } from '@nebular/theme';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
   declarations: [TodoComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    ReactiveFormsModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
