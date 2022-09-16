import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/_appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  _inputName!: string;
  constructor(private _appService: DesignUtilityService) {
    this._appService.inputText.subscribe((res: any) => {
      this._inputName = res
      console.log(this._inputName);

    });
  }

  ngOnInit(): void {
    this._appService.headerText.next(true);
  }

  // ngOnDestroy(): void {
  //   this._appService.headerText.next(false);
  // }

}
