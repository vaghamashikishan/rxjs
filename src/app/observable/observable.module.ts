import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ObservableRoutingModule } from './observable-routing.module';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { DebounceDistinctComponent } from './debounce-distinct/debounce-distinct.component';
import { FilterComponent } from './filter/filter.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { MapComponent } from './map/map.component';
import { ObservableComponent } from './observable.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PluckComponent } from './pluck/pluck.component';
import { SubjectComponent } from './subject/subject.component';
import { TakeComponent } from './take/take.component';
import { ToArrayComponent } from './to-array/to-array.component';


@NgModule({
  declarations: [
    ObservableComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TakeComponent,
    DebounceDistinctComponent,
    SubjectComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule,
    FormsModule
  ]
})
export class ObservableModule { }
