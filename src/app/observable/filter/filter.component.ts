import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  constructor() { }
  subscription1!: Subscription;
  user = [
    { id: 1, name: 'Kishan' },
    { id: 2, name: 'jay' },
    { id: 3, name: 'parth' },
    { id: 4, name: 'pritesh' },
    { id: 5, name: 'aarav' },
    { id: 6, name: 'mitesh' },
    { id: 7, name: 'jaydip' },
  ]

  ngOnInit(): void {
    const userObservable = from(this.user);
    this.subscription1 = userObservable
      .pipe(filter(user => user.name.length > 5))
      .subscribe(res => {
        console.log(res);
      })
  }

  ngOnDestroy(): void {
    if (this.subscription1) this.subscription1.unsubscribe();
  }
}
