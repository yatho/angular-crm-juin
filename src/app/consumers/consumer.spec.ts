import { TestBed } from '@angular/core/testing';

import { Consumer } from './consumer';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Consumer', () => {
  let service: Consumer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    });
    service = TestBed.inject(Consumer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
