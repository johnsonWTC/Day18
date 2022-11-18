import { Component, OnInit } from '@angular/core';
import { laptop } from '../laptop';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor() { }

laptops :laptop [] = []

  ngOnInit(): void {
    this.laptops = [
      {
        name : "hp",
        color : "blue",
        size : 20
      },
      {
        name : "apple",
        color : "red",
        size : 10
      },
      {
        name : "hp",
        color : "pink",
        size : 15
      }
    ]
  }

}
