import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { commonComponents } from './components';
import { directives } from './directives';
import { AgoPipe } from './pipes/ago.pipe';
import { FilterOperatorsComponent } from './components/filter-operators/filter-operators.component';

@NgModule({
  declarations: [...commonComponents, ...directives, AgoPipe, FilterOperatorsComponent],
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
