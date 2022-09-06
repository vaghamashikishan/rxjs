import { Component, OnInit } from '@angular/core';
import { Subscription, from, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }
  subscription!: Subscription;

  ngOnInit(): void {
    let var1 = from(['kishan', 'jay', 'pritesh', 'parth']);

    var1.pipe(toArray()).subscribe((res: any) => {
      console.log(res);
    })
  }

}
