import { Component, OnInit } from '@angular/core';
import { interval, take, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // take
    const intervalObs = interval(1000);

    intervalObs
      .pipe(take(5))
      .subscribe(res => {
        // console.log(res);
      })

    // takeUntil
    const intervalObs1 = interval(1000);
    const stop = timer(5000);
    intervalObs1
      .pipe(
        takeUntil(stop)
      )
      .subscribe(res => {
        console.log(res);

      })
  }

}
