import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableRoutingModule } from './observable/observable-routing.module';

import { PromiseComponent } from './promise/promise.component';


const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule)
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
