import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CartSummary } from '../../models';

@Component({
  selector: 'app-shopping-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {

  @Input() summary: CartSummary;
  constructor() { }

  ngOnInit() {
  }

}
