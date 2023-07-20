import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss','./small-card.responsive.component.scss']
})
export class SmallCardComponent implements OnInit {
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
