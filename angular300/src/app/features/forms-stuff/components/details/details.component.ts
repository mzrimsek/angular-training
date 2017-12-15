import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-forms-stuff-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  name$: Observable<string>;
  canLeave = false;
  message: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.name$ = this.route.paramMap.map(param => param.get('name'));
  }

  goHome() {
    this.router.navigate(['misc'], { relativeTo: this.route });
  }

  toggle() {
    this.canLeave = !this.canLeave;
  }
}
