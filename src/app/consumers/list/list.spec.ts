import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List } from './list';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppMaterialModule } from '../../app-material-module';
import { FormsModule } from '@angular/forms';
import { provideRouter, RouterModule } from '@angular/router';

describe('List', () => {
  let component: List;
  let fixture: ComponentFixture<List>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [List],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
      imports: [
        AppMaterialModule,
        FormsModule,
        RouterModule.forRoot([]) // Assuming you want to provide an empty route configuration
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
