import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NbCardModule, NbInputModule, NbFormFieldModule, NbIconModule, NbButtonModule, NbCheckboxModule } from '@nebular/theme';

import { ReactiveFormsModule } from '@angular/forms';
import { CapitalizeFirstLetter } from '../shared/pipes/capitalize-first-letter.pipe';


@NgModule({
  declarations: [CapitalizeFirstLetter],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule
  ],
  exports: [
    CapitalizeFirstLetter,
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule]
})
export class SharedModule { }
