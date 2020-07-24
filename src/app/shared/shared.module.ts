import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { commonComponents } from './components';
import { directives } from './directives';

@NgModule({
  declarations: [...commonComponents, ...directives],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...commonComponents,
    ...directives
  ],
  providers: [...directives]
})
export class SharedModule { }
