import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MediaListItem } from '../../models';
import { State, selectAllMediaItems } from '../../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  items$: Observable<MediaListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectAllMediaItems);
  }
}
