import { TestBed } from '@angular/core/testing';
import { HoennTrainersService } from './hoenn-trainers-service';

describe('HoennTrainersService', () => {
  let service: HoennTrainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennTrainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
