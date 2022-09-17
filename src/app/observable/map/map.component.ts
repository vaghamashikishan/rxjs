import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/_appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  subscriptionVar!: Subscription;
  constructor(private _service: DesignUtilityService) { }

  ngOnInit(): void {
    const intervalVar = interval(1000);

    this.subscriptionVar = intervalVar
      .pipe(map(data => 'Variable ' + data))
      .subscribe(res => {
        console.log(res);
        this._service.print(res, 'li-container');
        setTimeout(() => {
          this.subscriptionVar.unsubscribe();
        }, 5000);
      })
  }
  ngOnDestroy(): void {
    if (this.subscriptionVar) this.subscriptionVar.unsubscribe();
  }
}
