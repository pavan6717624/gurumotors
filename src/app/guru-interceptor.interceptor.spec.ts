import { TestBed } from '@angular/core/testing';

import { GuruInterceptorInterceptor } from './guru-interceptor.interceptor';

describe('GuruInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GuruInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GuruInterceptorInterceptor = TestBed.inject(GuruInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
