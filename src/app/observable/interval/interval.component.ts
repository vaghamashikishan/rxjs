import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/_appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, AfterViewInit {

  constructor(private _designUtility: DesignUtilityService) { }

  intervalMsg: number = 0;
  subscriptionVar!: Subscription;

  @ViewChild('addbtn') addBtn!: ElementRef;
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count = interval(1000);
    // let count = timer(3000, 1000); (wait for 3 seconds to see the result)

    this.subscriptionVar = count.subscribe(res => {
      this.intervalMsg = res;
      this._designUtility.print(this.intervalMsg, 'liContainer1');
      this._designUtility.print(this.intervalMsg, 'liContainer2');
      this._designUtility.print(this.intervalMsg, 'liContainer3');

      if (res >= 5) {
        this.subscriptionVar.unsubscribe();
      }
    });
  }
}
