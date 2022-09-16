import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/_appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHeaderText: boolean = false;
  constructor(private _appService: DesignUtilityService) { }

  ngOnInit(): void {
    this._appService.headerText.subscribe(res => {
      this.isHeaderText = res;
    })
  }

}
