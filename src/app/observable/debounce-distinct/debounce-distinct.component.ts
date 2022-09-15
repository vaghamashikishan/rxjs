import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map, retry } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debounce-distinct',
  templateUrl: './debounce-distinct.component.html',
  styleUrls: ['./debounce-distinct.component.scss']
})
export class DebounceDistinctComponent implements OnInit, AfterViewInit {

  constructor(
    private _loadingBar: LoadingBarService
  ) { }

  @ViewChild('input1') input1El!: ElementRef;
  @ViewChild('input2') input2El!: ElementRef;
  data: string = '';
  data2: string = '';
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const el1 = fromEvent<any>(this.input1El.nativeElement, 'keyup');
    el1
      .pipe(
        map(event => event.target.value),
        debounceTime(1000),
      )
      .subscribe((res: any) => {
        this._loadingBar.start();

        setTimeout(() => {
          this.data = res;
          this._loadingBar.stop();
          console.log(res);
        }, 1000);

      })

    const el2 = fromEvent<any>(this.input2El.nativeElement, 'keyup');
    el2
      .pipe(
        map(event => event.target.value),
        // debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((res: any) => {
        this._loadingBar.start();

        console.log(res);
        setTimeout(() => {
          this.data2 = res;
          this._loadingBar.stop();
        }, 1000);
      })
  }
}
