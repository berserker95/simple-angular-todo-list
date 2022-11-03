import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NbCardModule,
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbButtonModule,
  NbCheckboxModule,
  NbTooltipModule
} from '@nebular/theme';

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
    NbTooltipModule,
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
    NbTooltipModule,
    ReactiveFormsModule]
})
export class SharedModule { }
