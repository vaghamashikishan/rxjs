import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // If we click on li card -> a tag in li card will hit.
    document.addEventListener('click', (e: any) => {
      if (e.target.className === 'li-a') {
        e.target.children[0].click();
      }
    });
  }
}
