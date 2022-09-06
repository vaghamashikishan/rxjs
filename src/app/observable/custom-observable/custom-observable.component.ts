import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Custom observable
    let cusObs = Observable.create((observer: any) => {
      observer.next('1');
      observer.next('2');
      observer.error('It is custom error');
      // observer.complete();
      observer.next('3');
    });

    cusObs.subscribe((res: any) => {
      console.log(res);
    })
  }

}
