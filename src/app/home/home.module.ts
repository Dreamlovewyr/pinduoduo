import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { homeComponents } from '../home/components';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [...homeComponents],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
