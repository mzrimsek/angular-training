import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UserService } from './user.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  describe('with logged in user', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
      const stubbedUserService: UserService = {
        isLoggedIn: true,
        getUserName: () => 'Rey'
      };

      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [{ provide: UserService, useValue: stubbedUserService }]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('[data-login-greeting]'));
      el = de.nativeElement;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display the name', () => {
      expect(el.textContent).toBe('Greetings, Rey');
    });
  });

  describe('with non-logged in user', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
      const stubbedUserService: UserService = {
        isLoggedIn: false,
        getUserName: () => ''
      };

      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        providers: [{ provide: UserService, useValue: stubbedUserService }]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('[data-login-greeting]'));
      el = de.nativeElement;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display the error message', () => {
      expect(el.textContent).toBe('You are not logged in');
    });
  });
});
