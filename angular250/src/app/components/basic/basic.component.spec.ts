import { BasicComponent } from './basic.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core/';
import { By } from '@angular/platform-browser';
import { click } from '../../utils';

describe('testing the component directly', () => {
  it('should have the correct default message', () => {
    const component = new BasicComponent();
    expect(component.message).toBe('Hello, World!');
  });

  it('should change the message when the button is clicked', () => {
    const component = new BasicComponent();
    component.changeMessage();
    expect(component.message).toBe('Goodbye!');
  });
});

describe('treating this like a component', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let deButton: DebugElement;

  beforeEach(() => {
    // mini version of the module
    TestBed.configureTestingModule({
      declarations: [BasicComponent]
    }).compileComponents();

    // an instance of that component - but it isn't just the typescript class
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('[data-basic-message]'));
    el = de.nativeElement;

    deButton = fixture.debugElement.query(By.css('[data-basic-button]'));
    fixture.detectChanges();
  });

  it('should have the default message', () => {
    expect(el.textContent).toBe('Hello, World!');
  });

  it('should change the message when the button is clicked', () => {
    click(deButton);
    fixture.detectChanges();
    expect(el.textContent).toBe('Goodbye!');
  });
});
