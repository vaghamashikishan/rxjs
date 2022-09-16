import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  headerText = new Subject<boolean>();
  inputText = new BehaviorSubject<string>('Kishan');

  print(text: any, elementID: any) {
    let li = document.createElement('li');
    li.innerText = text;

    let ul = document.getElementById(elementID);
    ul?.appendChild(li);
  }
}
