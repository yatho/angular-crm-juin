import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche } from './fiche';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppMaterialModule } from '../../app-material-module';
import { Help } from '../../component/help/help';
import { ReactiveFormsModule } from '@angular/forms';

describe('Fiche', () => {
  let component: Fiche;
  let fixture: ComponentFixture<Fiche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fiche, Help],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [
        AppMaterialModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fiche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
