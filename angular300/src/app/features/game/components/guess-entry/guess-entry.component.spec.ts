import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessEntryComponent } from './guess-entry.component';

describe('GuessEntryComponent', () => {
  let component: GuessEntryComponent;
  let fixture: ComponentFixture<GuessEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
