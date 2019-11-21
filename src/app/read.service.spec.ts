import { TestBed } from '@angular/core/testing';

import { ReadService } from './read.service';

describe('ReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadService = TestBed.get(ReadService);
    expect(service).toBeTruthy();
  });

  // let appService: ReadService;
  // const appServiceSpy = spyOn(appService, 'read');

  // appServiceSpy.and.returnValue(8 as any);
  // expect(appServiceSpy).toBe(8);
  // expect(appServiceSpy).toHaveBeenCalled();
  // expect(appServiceSpy.calls.count()).toBe(1);
  // expect(appServiceSpy.calls.mostRecent().returnValue).toBe(8 as any);

  // appServiceSpy.calls.reset()

  // appServiceSpy(3).and.callThrough();
  // expect(appServiceSpy).toHaveBeenCalledWith('/assets/blogers.json');

  // appServiceSpy.and.callFake(((number: number) => 3 * number) as any);
  // appServiceSpy(3);
  // expect(appServiceSpy.calls.mostRecent().returnValue).toBe(9 as any);

  // appServiceSpy('twooo').and.throwError('Argument must be a number');
  // expect(appServiceSpy).toThrow();

  // appServiceSpy.and.stub();




  // const exampleSpy = jasmine.createSpyObj('ExampleClass', {
  //   getData: 'Hello',
  //   // getValue: 1,
  // });

  // expect(exampleSpy.getValue).toBe(1);
  // expect(exampleSpy.getValue).toHaveBeenCalled();

  // expect(exampleSpy.getData).toBe('Hello');
  // expect(exampleSpy.getData).toHaveBeenCalled();

});
