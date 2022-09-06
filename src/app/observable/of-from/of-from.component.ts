import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/_appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private _designSerivce: DesignUtilityService) { }

  ngOnInit(): void {

    // for 'of' operator
    let ofVar = of('Kishan', 'Rajeshbhai', 'Vaghamashi');

    console.log("----------OF operator----------");
    ofVar.subscribe(res => {
      console.log(res);
      this._designSerivce.print(res, 'liContainer');
    })

    // for 'from' operator
    let fromVar = from(['Kishan', 'Rajeshbhai', 'Vaghamashi']);

    console.log("----------FROM operator----------");
    fromVar.subscribe(res => {
      console.log(res);
      this._designSerivce.print(res, 'liContainer2');
    })

    // for 'from' operator with 'string' argument
    let fromVarString = from('Kishan Vaghamashi');

    console.log("----------FROM operator with STRING----------");
    fromVarString.subscribe(res => {
      console.log(res);
      this._designSerivce.print(res, 'liContainer3');
    })
  }

}
