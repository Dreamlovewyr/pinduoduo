import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { commonComponents } from './components';

@NgModule({
  declarations: [...commonComponents],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...commonComponents
  ]
})
export class SharedModule { }
