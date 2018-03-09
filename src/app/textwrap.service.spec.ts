import { TestBed, inject } from '@angular/core/testing';

import { TextwrapService } from './textwrap.service';

describe('TextwrapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextwrapService]
    });
  });

  it('should be created', inject([TextwrapService], (service: TextwrapService) => {
    expect(service).toBeTruthy();
  }));
});
