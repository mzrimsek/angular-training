import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsStuffComponent } from './forms-stuff.component';

describe('FormsStuffComponent', () => {
  let component: FormsStuffComponent;
  let fixture: ComponentFixture<FormsStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
