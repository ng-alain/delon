import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { discardPeriodicTasks, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { DefaultUrlSerializer, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DOCUMENT } from '@angular/common';
import { DelonAuthConfig } from '../auth.config';
import { DelonAuthModule } from '../auth.module';
import { DA_SERVICE_TOKEN, ITokenModel, ITokenService } from '../token/interface';
import { SimpleTokenModel } from '../token/simple/simple.model';
import { SocialService } from './social.service';

const mockRouter = {
  url: '',
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl: jasmine.createSpy('navigateByUrl'),
  parseUrl: jasmine.createSpy('parseUrl').and.callFake((value: any) => {
    return new DefaultUrlSerializer().parse(value);
  }),
};

class MockDocument {
  location = new MockLocation();
}

class MockLocation {
  private url: string;

  get href(): string {
    return this.url;
  }

  set href(url: string) {
    this.url = url;
  }
}

const MockAuth0 = {
  type: 'auth0',
  url: `//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent(
    'http://localhost:4200/#/login/callback',
  )}`,
  be: { client: '8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5' },
  model: { client: '8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5', token: '123' },
};

describe('auth: social.service', () => {
  let injector: Injector;
  let srv: SocialService;

  function genModule(options: DelonAuthConfig, tokenData?: SimpleTokenModel) {
    injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), DelonAuthModule],
      providers: [
        SocialService,
        { provide: DelonAuthConfig, useValue: options },
        { provide: DOCUMENT, useClass: MockDocument },
        { provide: Router, useValue: mockRouter },
      ],
    });
    if (tokenData) injector.get(DA_SERVICE_TOKEN).set(tokenData);

    srv = injector.get(SocialService);
  }

  beforeEach(() => {
    genModule({});
  });

  afterEach(() => srv.ngOnDestroy());

  describe('#login', () => {
    [MockAuth0].forEach((item: any) => {
      it(`${item.type} via href`, () => {
        srv.login(item.url, '/', { type: 'href' });
        const ret = injector.get(DOCUMENT).location.href;
        for (const key in item.be) {
          const expected = `${key}=${item.be[key]}`;
          expect(ret).toContain(expected, `muse contain "${expected}"`);
        }
      });

      it(`${item.type} via window`, fakeAsync(() => {
        spyOn(window, 'open').and.callFake(() => {
          injector.get(DA_SERVICE_TOKEN).set(item.model);
          return { closed: true };
        });
        srv.login(item.url).subscribe(res => {});
        tick(130);
        expect(window.open).toHaveBeenCalled();
        const token = injector.get(DA_SERVICE_TOKEN).get();
        for (const key in item.be) {
          expect(token[key]).toContain(item.be[key]);
        }
        discardPeriodicTasks();
      }));
    });

    it(`should be return null model if set a null in window`, fakeAsync(() => {
      spyOn(window, 'open').and.callFake(() => {
        injector.get(DA_SERVICE_TOKEN).set(null);
        return { closed: true };
      });
      srv.login(MockAuth0.url).subscribe(res => {});
      tick(130);
      expect(window.open).toHaveBeenCalled();
      discardPeriodicTasks();
    }));

    it('can\'t get model until closed', fakeAsync(() => {
      spyOn(srv, 'ngOnDestroy');
      spyOn(window, 'open').and.callFake(() => {
        injector.get(DA_SERVICE_TOKEN).set(null);
        return { closed: false };
      });
      srv.login(MockAuth0.url).subscribe(res => {});
      tick(130);
      expect(window.open).toHaveBeenCalled();
      expect(srv.ngOnDestroy).not.toHaveBeenCalled();
      discardPeriodicTasks();
    }));
  });

  describe('#callback', () => {
    const jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjE1MTQ2NDk2MDB9.nocpzY3UnRLJXg6I7unzvH4JUzcBRYBtf_xQ41xCcTw`;
    const swtData: ITokenModel = {
      token: '1234567890-34567890',
      user: 'cipchk',
      uid: 1,
      role: 'admin',
      permission: [1, 2, 3, 4],
    };
    [
      {
        summary: 'swt via url',
        url: 'http://localhost:4200/login/callback?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1',
        be: { token: '40SOJV-L8oOwwUIs', name: 'cipchk', uid: '1' },
      },
      {
        summary: 'jwt via url',
        url: `http://localhost:4200/login/callback?token=${jwtToken}`,
        be: { token: jwtToken },
      },
      {
        summary: 'url muse contain a ?',
        url: 'http://localhost:4200/callback',
        be: 'throw',
      },
      {
        summary: 'invalide token data',
        url: 'http://localhost:4200/?code=40SOJV-L8oOwwUIs#/login/callback',
        be: 'throw',
      },
      { summary: 'via ITokenModel', url: swtData, be: swtData },
    ].forEach((item: any, index: number) => {
      it(`${item.summary}`, () => {
        if (item.be === 'throw') {
          const router = injector.get(Router) as any;
          router.url = item.url;
          expect(() => {
            srv.callback(null);
          }).toThrow();
          return;
        }
        const ret = srv.callback(item.url);
        for (const key in item.be) {
          expect(ret[key]).toBe(item.be[key]);
        }
      });
    });
  });
});
