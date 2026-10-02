import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';

import { AlainAuthConfig, provideAlainConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { JWTTokenModel } from '../..';
import { provideAuth } from '../provide';
import { CheckJwt, getLoginUrl, toLogin } from './helper';
import { DA_SERVICE_TOKEN, ITokenService } from './interface';

describe('helper: CheckJwt', () => {
  it('invalid jwt token should return false', () => {
    const tokenModel = new JWTTokenModel();
    const offset = 10;
    tokenModel.token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTk1OD'; // bad jwt token
    expect(CheckJwt(tokenModel, offset)).toBe(false);
  });
});

describe('helper: getLoginUrl', () => {
  // mock 浏览器地址，避免测试运行器自身的 location.search/hash 污染结果
  function genLoginUrl(
    login_url: string,
    routerUrl = '/',
    location: NzSafeAny = { href: '', search: '', hash: '', pathname: '/' }
  ): string {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: DOCUMENT, useValue: { location } }]
    });
    vi.spyOn(TestBed.inject(Router), 'url', 'get').mockReturnValue(routerUrl);
    return TestBed.runInInjectionContext(() => getLoginUrl({ options: { login_url } }));
  }

  it('should be return login_url when no search', () => {
    expect(genLoginUrl('/login')).toBe('/login');
  });

  it('should be carry search from router url', () => {
    expect(genLoginUrl('/login', '/list?a=1&b=2')).toBe('/login?a=1&b=2');
  });

  it('should be carry search from location.hash when router url has no search', () => {
    expect(genLoginUrl('/login', '/', { hash: '#/passport/login?_name=a&_pwd=b' })).toBe('/login?_name=a&_pwd=b');
  });

  it('should be carry search from location.search when router url has no search', () => {
    expect(genLoginUrl('/login', '/', { hash: '', search: '?a=1' })).toBe('/login?a=1');
  });

  it('should be keep duplicated search keys', () => {
    expect(genLoginUrl('/login', '/list?a=1&a=2')).toBe('/login?a=1&a=2');
  });

  it('should be carry search with [&] when login_url has query', () => {
    expect(genLoginUrl('/login?from=app', '/list?a=1')).toBe('/login?from=app&a=1');
  });

  it('should be carry search when login_url is external', () => {
    expect(genLoginUrl('https://ng-alain.com/login', '/list?a=1&b=2')).toBe('https://ng-alain.com/login?a=1&b=2');
  });

  it('should be carry search with [&] when login_url is external and has query', () => {
    expect(genLoginUrl('https://ng-alain.com/login?from=app', '/list?a=1')).toBe(
      'https://ng-alain.com/login?from=app&a=1'
    );
  });
});

describe('helper: toLogin', () => {
  let router: Router;
  let token: ITokenService;
  const MockDoc = {
    location: {
      href: '',
      search: '',
      hash: '',
      pathname: '/'
    }
  };

  function genModule(options: AlainAuthConfig): void {
    MockDoc.location.href = '';
    MockDoc.location.search = '';
    MockDoc.location.hash = '';
    MockDoc.location.pathname = '/';
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: DOCUMENT, useValue: MockDoc },
        provideAlainConfig({ auth: options }),
        provideAuth()
      ]
    });
    router = TestBed.inject(Router);
    vi.spyOn(router, 'navigateByUrl').mockReturnValue(undefined as NzSafeAny);
    token = TestBed.inject(DA_SERVICE_TOKEN);
  }

  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('should be always set referrer when redirect is disabled', () => {
    genModule({ token_invalid_redirect: false });
    TestBed.runInInjectionContext(() => toLogin({ url: '/a' }));
    expect(token.referrer!.url).toBe('/a');
    vi.advanceTimersByTime(10);
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should be fallback to router url', () => {
    genModule({});
    TestBed.runInInjectionContext(() => toLogin());
    expect(token.referrer!.url).toBe('/');
  });

  it('should be use token.options when options is not passed', () => {
    genModule({ login_url: '/custom-login' });
    TestBed.runInInjectionContext(() => toLogin({ url: '/a' }));
    vi.advanceTimersByTime(10);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/custom-login');
  });

  it('should be prefer passed options', () => {
    genModule({ login_url: '/token-login' });
    TestBed.runInInjectionContext(() => toLogin({ options: { login_url: '/explicit', token_invalid_redirect: true } }));
    vi.advanceTimersByTime(10);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/explicit');
  });

  it('should be redirect via location when login_url is external', () => {
    genModule({ login_url: 'https://ng-alain.com/login' });
    TestBed.runInInjectionContext(() => toLogin());
    vi.advanceTimersByTime(10);
    expect(MockDoc.location.href).toBe('https://ng-alain.com/login');
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should be do nothing when already at login url (hash)', () => {
    genModule({ login_url: '/passport/login' });
    MockDoc.location.hash = '#/passport/login?_name=a&_pwd=b';
    TestBed.runInInjectionContext(() => toLogin());
    vi.advanceTimersByTime(10);
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should be carry search from location.hash', () => {
    genModule({ login_url: '/passport/login' });
    MockDoc.location.hash = '#/list?_name=a&_pwd=b';
    TestBed.runInInjectionContext(() => toLogin());
    vi.advanceTimersByTime(10);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/passport/login?_name=a&_pwd=b');
  });
});
