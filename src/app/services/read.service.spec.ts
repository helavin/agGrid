import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReadService } from './read.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ReadService', () => {
  let service: ReadService;
  let httpTestingController: HttpTestingController;
  const serviceSpy = spyOn(service, 'read');

  const mockResponse = // {
    // kind: 'youtube#searchListResponse',
    // etag: '"p4VTdlkQv3HQeTEaXgvLePAydmU/Xgm2GzBIA-b5d1V1nnS6C70JnHA"',
    // nextPageToken: 'CDIQAA',
    // regionCode: 'BY',
    // pageInfo: {
    //   totalResults: 1000000,
    //   resultsPerPage: 50
    // },
    // items:
    [
      {
        kind: 'youtube#searchResult',
        etag: '"p4VTdlkQv3HQeTEaXgvLePAydmU/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg"',
        id: {
          kind: 'youtube#video',
          videoId: '3fumBcKC6RE'
        },
        snippet: {
          publishedAt: '2011-05-12T20:01:31.000Z',
          channelId: 'UCEOhcOACopL42xyOBIv1ekg',
          title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
          description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
              width: 480,
              height: 360
            }
          },
          channelTitle: 'LilWayneVEVO',
          liveBroadcastContent: 'none'
        }
      },
      {
        kind: 'youtube#searchResult',
        etag: '"p4VTdlkQv3HQeTEaXgvLePAydmU/HY_Q6YVFuxTsJwCLCFq1tibsK7w"',
        id: {
          kind: 'youtube#video',
          videoId: '450p7goxZqg'
        },
        snippet: {
          publishedAt: '2013-10-02T14:00:06.000Z',
          channelId: 'UCNnnwVSI5Ndo2I4Y-LPuuew',
          title: 'John Legend - All of Me (Edited Video)',
          // tslint:disable-next-line: max-line-length
          description: 'John Legend\'s official music video for \'All Of Me\'. Click to listen to John Legend on Spotify: http://smarturl.it/JohnLSpotify?IQid=... As featured on Love In The ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/450p7goxZqg/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/450p7goxZqg/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/450p7goxZqg/hqdefault.jpg',
              width: 480,
              height: 360
            }
          },
          channelTitle: 'johnlegendVEVO',
          liveBroadcastContent: 'none'
        }
      }
    ]
    // }
    ;


  // beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReadService],
      // schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.get(ReadService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    const query = 'testquery';
    service.read()
      .subscribe(r => {
        expect(r.items.length > 0).toBe(true);
      });

    const req = httpTestingController.expectOne((r) => r.url.includes(query));
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should be get data2', () => {
    serviceSpy.and.returnValue('/assets/blogers.json' as any);
    expect(serviceSpy.calls.mostRecent().returnValue).toBe(mockResponse as any);
    // expect(serviceSpy).toBe(mockResponse);
  });

});
