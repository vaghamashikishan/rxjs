import { Component, OnInit } from '@angular/core';
import { Observable, from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const user = from([
      { nest: { child: 5 }, id: 1, name: 'Kishan' },
      { nest: { child: 8 }, id: 2, name: 'jay' },
      { nest: { child: 9 }, id: 3, name: 'parth' },
      { nest: { child: 7 }, id: 4, name: 'pritesh' },
      { nest: { child: 6 }, id: 5, name: 'aarav' },
      { nest: { child: 5 }, id: 6, name: 'mitesh' },
      { nest: { child: 3 }, id: 7, name: 'jaydip' },
    ])

    user
      .pipe(pluck('nest', 'child'))
      .subscribe((res: any) => {
        console.log(res);

      })
  }
}
