import { HttpParams } from '@angular/common/http';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { _HttpClient } from './http.client';
import {
  BaseApi,
  BaseHeaders,
  BaseUrl,
  Body,
  DELETE,
  FORM,
  GET,
  HEAD,
  Headers,
  JSONP,
  OPTIONS,
  PATCH,
  Path,
  Payload,
  POST,
  PUT,
  Query,
} from './http.decorator';

@BaseUrl('/user')
@BaseHeaders({ bh: 'a' })
class MockService extends BaseApi {
  @GET()
  query(@Query('pi') _pi: number, @Query('ps') _ps: number, @Headers('mh') _mh: string): Observable<any> {
    return null as any;
  }

  @GET(':id')
  GET(@Path('id') _id: number): Observable<any> {
    return null as any;
  }

  @GET(':id/:id')
  MulitPath(@Path('id') _id: number): Observable<any> {
    return null as any;
  }

  @GET('::id/:id/::id')
  escapePath(@Path('id') _id: number | undefined): Observable<any> {
    return null as any;
  }

  @GET('')
  arrQS(@Query('ids') _ids: number[]): Observable<any> {
    return null as any;
  }

  @POST(':id')
  save(@Path('id') _id: number, @Body _data: {}): Observable<any> {
    return null as any;
  }

  @POST(':id')
  saveByArray(@Path('id') _id: number, @Body _data: string[]): Observable<any> {
    return null as any;
  }

  @GET('')
  payloadGet(@Payload _query: any, @Query('status') _status?: number): Observable<any> {
    return null as any;
  }

  @POST(':id')
  payloadPost(@Payload _body: any, @Body _body2?: {}): Observable<any> {
    return null as any;
  }

  @POST(':id')
  payloadPostByArray(@Payload _body: string[]): Observable<any> {
    return null as any;
  }

  @DELETE()
  DELETE(): Observable<any> {
    return null as any;
  }

  @OPTIONS()
  OPTIONS(): Observable<any> {
    return null as any;
  }

  @PUT()
  PUT(): Observable<any> {
    return null as any;
  }

  @HEAD()
  HEAD(): Observable<any> {
    return null as any;
  }

  @PATCH()
  PATCH(): Observable<any> {
    return null as any;
  }

  @JSONP()
  JSONP(): Observable<any> {
    return null as any;
  }

  @FORM()
  FORM(): Observable<any> {
    return null as any;
  }

  @GET('', { acl: 'admin' })
  ACL_Admin(): Observable<any> {
    return null as any;
  }

  @GET('', { acl: 'user' })
  ACL_User(): Observable<any> {
    return null as any;
  }
}

class MockEmptyService extends BaseApi {
  @GET()
  GET(): Observable<any> {
    return null as any;
  }
  @GET('/a')
  A(): Observable<any> {
    return null as any;
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

    it('should be escaping operations', () => {
      srv.escapePath(10);

      expect(request).toHaveBeenCalled();
      expect(request.calls.mostRecent().args[1]).toContain(`:id/10/:id`);
    });

    it('should be ingore replace param when is invalid value', () => {
      srv.escapePath(undefined);

      expect(request).toHaveBeenCalled();
      expect(request.calls.mostRecent().args[1]).toContain(`:id/:id/:id`);
    });
  });

  it('should construct a POST request', () => {
    srv.save(1, { name: 'cipchk' });
    expect(request).toHaveBeenCalled();
    expect(request.calls.mostRecent().args[2].body.name).toBe('cipchk');
  });

  it('should construct a POST request via array body', () => {
    srv.saveByArray(1, ['a', 'b']);
    expect(request).toHaveBeenCalled();
    expect(request.calls.mostRecent().args[2].body[0]).toBe('a');
    expect(request.calls.mostRecent().args[2].body[1]).toBe('b');
  });

  [`DELETE`, `OPTIONS`, `PUT`, `HEAD`, `PATCH`, `JSONP`].forEach(type => {
    it(`should construct a ${type} request`, () => {
      (srv as NzSafeAny)[type]();
      expect(request).toHaveBeenCalled();
      expect(request.calls.mostRecent().args[0]).toBe(type);
    });
  });

  it(`should be include content-type is application/x-www-form-urlencoded via FORM`, () => {
    srv.FORM();
    expect(request).toHaveBeenCalled();
    const arg = request.calls.mostRecent().args[2];
    expect(arg.headers['content-type']).toBe(`application/x-www-form-urlencoded`);
  });

  describe('PAYLOAD', () => {
    it('should be get', () => {
      srv.payloadGet({ pi: 1, ps: 10 });
      expect(request).toHaveBeenCalled();
      const arg = request.calls.mostRecent().args[2];
      expect(arg.params.pi).toBe(1);
      expect(arg.params.ps).toBe(10);
    });
    it('should be merge Query & Payload when method is get', () => {
      srv.payloadGet({ pi: 13, ps: 14 }, 520);
      expect(request).toHaveBeenCalled();
      const arg = request.calls.mostRecent().args[2];
      expect(arg.params.pi).toBe(13);
      expect(arg.params.ps).toBe(14);
      expect(arg.params.status).toBe(520);
    });
    it('should be post', () => {
      srv.payloadPost({ pi: 1, ps: 10 });
      expect(request).toHaveBeenCalled();
      const arg = request.calls.mostRecent().args[2];
      expect(arg.body.pi).toBe(1);
      expect(arg.body.ps).toBe(10);
    });
    it('should be post via array body', () => {
      srv.payloadPostByArray(['a', 'b']);
      expect(request).toHaveBeenCalled();
      const arg = request.calls.mostRecent().args[2];
      expect(arg.body[0]).toBe('a');
      expect(arg.body[1]).toBe('b');
    });
    it('should be merge Body & Payload when method is post', () => {
      srv.payloadPost({ pi: 13, ps: 14 }, { woc: 520 });
      expect(request).toHaveBeenCalled();
      const arg = request.calls.mostRecent().args[2];
      expect(arg.body.pi).toBe(13);
      expect(arg.body.ps).toBe(14);
      expect(arg.body.woc).toBe(520);
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
