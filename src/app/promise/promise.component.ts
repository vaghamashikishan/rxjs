import { Component, OnInit } from '@angular/core';
// import { rejects } from 'assert';
// import { resolve } from 'dns';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  dell = {
    name: 'dell',
    harddisk: '1TB',
    ram: '8GB'
  }
  hp = {
    name: 'HP',
    harddisk: '500GB',
    ram: '4GB'
  }
  availability = {
    name: 'No item',
  }
  isDell() {
    return false;
  }
  isHP() {
    return false;
  }
  isAvailable() {
    return false;
  }

  ngOnInit(): void {
    let isLaptop = new Promise((resolve, reject) => {
      if (this.isDell()) {
        return setTimeout(() => {
          resolve(this.dell)
        }, 2000);
      }
      else if (this.isHP()) {
        return setTimeout(() => {
          resolve(this.hp)
        }, 2000);
      }
      else {
        return setTimeout(() => {
          reject(this.availability)
        }, 2000);
      }
    })

    isLaptop
      .then(data => {
        console.log('Resolve is ');
        console.log(data);

      })
      .catch(data => {
        console.log('Reject is ');
        console.log(data);
      })
  }
  clickButtonHandler() { }
}
