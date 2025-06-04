import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Component, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

@Component({
    selector: 'crm-login',
    template: '',
    imports: [],
})
class MockLoginComponent {
}


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        MockLoginComponent,
        App
    ],
    providers: [
      provideRouter([]),
        provideZonelessChangeDetection()
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
