import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

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
    userObservable
      .pipe(filter(user => user.name.length > 5))
      .subscribe(res => {
        console.log(res);
      })
  }

}
