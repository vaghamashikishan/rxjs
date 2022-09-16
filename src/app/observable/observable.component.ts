import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // If we click on li card -> a tag in li card will hit.
    document.addEventListener('click', (e: any) => {
      if (e.target.className === 'li-a') {
        e.target.children[0].click();
      }
    });
  }

}
