import { TestBed } from '@angular/core/testing';

import { Consumer } from './consumer';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Consumer', () => {
  let service: Consumer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(Consumer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
