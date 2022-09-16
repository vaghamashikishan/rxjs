import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, from, pluck } from 'rxjs';
import { DesignUtilityService } from 'src/app/_appServices/design-utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  _serviceInputText!: string;
  @ViewChild('inputText') inputEl!: ElementRef;

  constructor(private _appService: DesignUtilityService) { }

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

    //For Behavior Subject example
    this._appService.inputText.subscribe(res => this._serviceInputText = res);
  }

  onChangeName() {
    this._serviceInputText = this.inputEl.nativeElement.value;
    this._appService.inputText.next(this._serviceInputText);
    this._appService.inputText.subscribe((res: any) => console.log(res));
  }
}
