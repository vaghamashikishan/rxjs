import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/_appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private designUtility: DesignUtilityService) { }

  @ViewChild('addBtn') addBtn!: ElementRef;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let printText = `Video ${count++}`
      this.designUtility.print(printText, 'liContainer');
      this.designUtility.print(printText, 'liContainer2');
    })
  }
}
