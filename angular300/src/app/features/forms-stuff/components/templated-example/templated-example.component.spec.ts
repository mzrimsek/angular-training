import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedExampleComponent } from './templated-example.component';

describe('TemplatedExampleComponent', () => {
  let component: TemplatedExampleComponent;
  let fixture: ComponentFixture<TemplatedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
