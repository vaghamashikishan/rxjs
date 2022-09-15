import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, fromEvent, map, retry } from 'rxjs';

@Component({
  selector: 'app-debounce-distinct',
  templateUrl: './debounce-distinct.component.html',
  styleUrls: ['./debounce-distinct.component.scss']
})
export class DebounceDistinctComponent implements OnInit, AfterViewInit {

  constructor(
  ) { }

  @ViewChild('input1') input1El!: ElementRef;
  data: string = '';
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const el1 = fromEvent<any>(this.input1El.nativeElement, 'keyup');
    el1
      .pipe(
        map(event => event.target.value),
        debounceTime(1000)
      )
      .subscribe((res: any) => {
        this.data = res;
        console.log(res);
      })
  }
}
