import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeContainerComponent } from './components/home-container';
import { HomeDetailComponent } from './components/home-detail';

const routes: Routes = [{
  path: '',
  component: HomeContainerComponent,
  children: [
    {
      path: '',
      redirectTo: 'hot',
      pathMatch: 'full'
    },
    {
      path: ':/tabLink',
      component: HomeDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
