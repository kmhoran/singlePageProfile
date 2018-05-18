import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Kevin Horan';
  haiku = ['I live for coding.'
          , 'But don\'t just take it from me:'
          , 'Come see what I\'ve built.'];
  constructor() {}

  ngOnInit() {}

}
