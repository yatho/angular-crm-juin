import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List } from './list';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import {  provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

describe('List', () => {
  let component: List;
  let fixture: ComponentFixture<List>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        provideZonelessChangeDetection()
    ],
    imports: [
        FormsModule,
        List
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(List);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
