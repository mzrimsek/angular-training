import { Component, OnInit, Input } from '@angular/core';
import { MovieSummary } from '../models';

@Component({
  selector: 'app-movies-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() summary: MovieSummary;
  constructor() { }

  ngOnInit() {
  }

}
