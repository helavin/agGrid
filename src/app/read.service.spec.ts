import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReadService } from './read.service';

describe('ReadService', () => {
  let readService: ReadService;
  let httpTestingController: HttpTestingController;

  // beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    readService = TestBed.get(ReadService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    // const service: ReadService = TestBed.get(ReadService);
    // expect(service).toBeTruthy();
    expect(readService).toBeTruthy();
  });

  it('should get url with parameters', () => {
    const mockResponse = '/assets/items.json';
      // [{
      //   items: [
      //     {
      //       id: 3
      //     }
      //   ]
      // }];
    const query = 'testquery';
    readService.read()
      .subscribe(r => {
        expect(r.items.length > 0).toBe(true);
      });

    const req = httpTestingController.expectOne((r) => r.url.includes(query));
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

});
