import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(text: any, elementID: any) {
    let li = document.createElement('li');
    li.innerText = text;

    let ul = document.getElementById(elementID);
    ul?.appendChild(li);
  }
}
