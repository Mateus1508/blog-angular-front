import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {
  @Input()
  id: number = 0;
  @Input()
  photo: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  
  constructor(){

  }

  ngOnInit(): void {

  }
}
