import { Observable } from 'rxjs';

import { HttpParams } from '@angular/common/http';
import { _HttpClient } from './http.client';
import {
  BaseApi,
  BaseHeaders,
  BaseUrl,
  Body,
  DELETE,
  GET,
  Headers,
  HEAD,
  JSONP,
  OPTIONS,
  Path,
  PATCH,
  POST,
  PUT,
  Query,
} from './http.decorator';

@BaseUrl('/user')
@BaseHeaders({ bh: 'a' })
class MockService extends BaseApi {
  @GET()
  query(
    @Query('pi') pi: number,
    @Query('ps') ps: number,
    @Headers('mh') mh: string,
  ): Observable<any> {
    return;
  }

  @GET(':id')
  GET(@Path('id') id: number): Observable<any> {
    return;
  }

  @GET(':id/:id')
  MulitPath(@Path('id') id: number): Observable<any> {
    return;
  }

  @GET('')
  arrQS(@Query('ids') ids: number[]): Observable<any> {
    return;
  }

  @POST(':id')
  save(@Path('id') id: number, @Body data: {}): Observable<any> {
    return;
  }

  @DELETE()
  DELETE(): Observable<any> {
    return;
  }

  @OPTIONS()
  OPTIONS(): Observable<any> {
    return;
  }

  @PUT()
  PUT(): Observable<any> {
    return;
  }

  @HEAD()
  HEAD(): Observable<any> {
    return;
  }

  @PATCH()
  PATCH(): Observable<any> {
    return;
  }

  @JSONP()
  JSONP(): Observable<any> {
    return;
  }

  @GET('', { acl: 'admin' })
  ACL_Admin(): Observable<any> {
    return;
  }

  @GET('', { acl: 'user' })
  ACL_User(): Observable<any> {
    return;
  }
}

class MockEmptyService extends BaseApi {
  @GET()
  GET(): Observable<any> {
    return;
  }
  @GET('/a')
  A(): Observable<any> {
    return;
  }
}

describe('theme: http.decorator', () => {
  let request: jasmine.Spy;
  let srv: MockService;
  let injector: MockInjector;
  let tokens: any;

  class MockInjector {
    get(token: any, notFoundValue = null) {
      const tokenStr = token + '';
      if (tokenStr.includes('_HttpClient')) {
        return tokens._HttpClient;
      }
      if (tokenStr.includes('ACLService')) {
        return tokens.ACLService;
      }
      return notFoundValue;
    }
  }

  beforeEach(() => {
    request = jasmine.createSpy('request').and.returnValue({});
    tokens = {
      _HttpClient: { request },
    };
    jasmine.createSpyObj('http', {
      request,
    });
    injector = new MockInjector();
    srv = new MockService(injector as any);
  });

  it('should working', () => {
    srv.GET(1);

    expect(request).toHaveBeenCalled();
    expect(request.calls.mostRecent().args[0]).toBe('GET');
    expect(request.calls.mostRecent().args[1]).toBe('/user/1');
  });

  it('should be throw error when not import AlainThemeModule', () => {
    expect(() => {
      delete tokens._HttpClient;
      srv.GET(1);
    }).toThrowError();
  });

  describe('[parse url]', () => {
    it('should be array of query string', () => {
      srv.arrQS([1, 2, 3]);

      expect(request).toHaveBeenCalled();
      const res = new HttpParams({
        fromObject: request.calls.mostRecent().args[2].params,
      });
      expect(res.toString()).toBe('ids=1&ids=2&ids=3');
    });

    it('should be ingore url & base url', () => {
      const srvEmpty = new MockEmptyService(injector as any);
      srvEmpty.GET();

      expect(request).toHaveBeenCalled();
      expect(request.calls.mostRecent().args[1]).toBe('/');
    });

    it('should be mulit path values', () => {
      srv.MulitPath(2);

      expect(request).toHaveBeenCalled();
      expect(request.calls.mostRecent().args[1]).toBe('/user/2/2');
    });

    describe('should be join baseUrl & url of method', () => {
      it('when without baseUrl', () => {
        const srv2 = new MockEmptyService(injector as any);
        srv2.A();

        expect(request).toHaveBeenCalled();
        expect(request.calls.mostRecent().args[1]).toBe('/a');
      });

      it('when without url of method', () => {
        srv.query(1, 1, '');

        expect(request).toHaveBeenCalled();
        expect(request.calls.mostRecent().args[1]).toBe('/user');
      });
    });
  });

  it('should construct a POST request', () => {
    srv.save(1, { name: 'cipchk' });
    expect(request).toHaveBeenCalled();
    expect(request.calls.mostRecent().args[2].body.name).toBe('cipchk');
  });

  [`DELETE`, `OPTIONS`, `PUT`, `HEAD`, `PATCH`, `JSONP`].forEach(type => {
    it(`should construct a ${type} request`, () => {
      srv[type]();
      expect(request).toHaveBeenCalled();
      expect(request.calls.mostRecent().args[0]).toBe(type);
    });
  });

  describe('[acl]', () => {
    it('should be request when user authorized', () => {
      tokens.ACLService = {
        can: () => true,
      };
      srv.ACL_Admin();

      expect(request).toHaveBeenCalled();
      expect(request.calls.mostRecent().args[0]).toBe('GET');
      expect(request.calls.mostRecent().args[1]).toBe('/user');
    });

    it('should be throw 401 when user not authorize', done => {
      tokens.ACLService = {
        can: () => false,
      };
      srv.ACL_User().subscribe(
        () => {
          expect(true).toBe(false);
          done();
        },
        err => {
          expect(err.status).toBe(401);
          done();
        },
      );
    });
  });
});
