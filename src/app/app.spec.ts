import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Component } from '@angular/core';
import { AppMaterialModule } from './app-material-module';
import { provideRouter, RouterModule } from '@angular/router';

@Component({
  selector: 'crm-login',
  template: '',
  standalone: false,
})
class MockLoginComponent {
}


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        App, MockLoginComponent
      ],
      imports: [
        AppMaterialModule,
        RouterModule.forRoot([]) // Assuming you want to provide an empty route configuration
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angularCRM');
  });
});
