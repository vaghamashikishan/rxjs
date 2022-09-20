import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs1 = interval(1000).pipe(map(obs1 => "1 " + obs1), take(5));
    const obs2 = interval(1050).pipe(map(obs2 => "2 " + obs2), take(3));

    const obs3 = merge(obs1, obs2);
    obs3.subscribe((res: any) => {
      console.log(res);
    })
  }
}
