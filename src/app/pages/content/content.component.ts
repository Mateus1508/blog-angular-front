import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private id: number | null = 0;
  photo: string = '';
  title: string = '';
  description: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(value => {
      this.id = Number(value.get('id'));
      });
      this.setValuesToContent(this.id);
  }

  setValuesToContent(id: number | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.photo = result.photo;
    this.title = result.title;
    this.description = result.description;
  }
}
