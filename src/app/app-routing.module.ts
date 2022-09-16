import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableRoutingModule } from './observable/observable-routing.module';
import { ObservableComponent } from './observable/observable.component';

import { PromiseComponent } from './promise/promise.component';


const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule)
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ObservableRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
