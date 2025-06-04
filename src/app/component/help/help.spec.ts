import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Help } from './help';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Help', () => {
  let component: Help;
  let fixture: ComponentFixture<Help>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [Help],
    providers: [
      provideZonelessChangeDetection()
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(Help);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
