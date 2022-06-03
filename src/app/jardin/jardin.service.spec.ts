/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JardinService } from './jardin.service';

describe('Service: Jardin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JardinService]
    });
  });

  it('should ...', inject([JardinService], (service: JardinService) => {
    expect(service).toBeTruthy();
  }));
});
