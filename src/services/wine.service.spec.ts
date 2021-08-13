import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WineService } from './wine.service';

describe('WineServiceService', () => {
  let service: WineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(WineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
