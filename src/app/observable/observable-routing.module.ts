import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { DebounceDistinctComponent } from './debounce-distinct/debounce-distinct.component';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { ObservableComponent } from './observable.component';
import { ObservableModule } from './observable.module';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { SubjectComponent } from './subject/subject.component';
import { TakeComponent } from './take/take.component';
import { ToArrayComponent } from './to-array/to-array.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ObservableComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'custom-observable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'take', component: TakeComponent },
      { path: 'debounce-distinct', component: DebounceDistinctComponent },
      { path: 'subject', component: SubjectComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
