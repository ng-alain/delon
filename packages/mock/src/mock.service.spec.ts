import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as Mock from 'mockjs';
import { DelonMockModule } from '../index';
import { MockRequest } from './interface';
import { DelonMockConfig } from './mock.config';
import { MockService } from './mock.service';

const DATA = {
  USERS: {
    // 支持值为 Object 和 Array
    'GET /users': { users: [1, 2] },
    // GET 可省略
    '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
    '/users/:id': (req: MockRequest) => {
      return { id: req.params.id, s: 'detail' };
    },
    '/users/:id/edit': (req: MockRequest) => {
      return { id: req.params.id, s: 'edit' };
    },
    'POST /users/1': { uid: 0, action: 'add' },
    '/data/([0-9])': (req: MockRequest) => req,
  },
};

describe('mock: service', () => {
  let injector: Injector;
  let srv: MockService = null;

  function genModule(options: DelonMockConfig) {
    options = Object.assign(new DelonMockConfig(), options);
    injector = TestBed.configureTestingModule({
      imports: [DelonMockModule.forRoot(options)],
      providers: [],
    });
    srv = injector.get(MockService);
    spyOn(console, 'log');
    spyOn(console, 'group');
    spyOn(console, 'groupEnd');
    spyOn(console, 'warn');
    spyOn(console, 'error');
  }

  describe('#getRule', () => {
    beforeEach(() =>
      genModule({
        data: DATA,
      }));

    afterEach(() => srv.ngOnDestroy());

    it('should be return GET rule', () => {
      const rule = srv.getRule('', '/users');
      expect(rule).not.toBeNull();
      expect(rule.url).toBe('/users');
    });

    it('should be return POST rule', () => {
      const rule = srv.getRule('POST', '/users/1');
      expect(rule).not.toBeNull();
      expect(rule.method).toBe('POST');
      expect(rule.url).toBe('/users/1');
    });

    it('should be return route param', () => {
      const rule = srv.getRule('GET', '/users/2');
      expect(rule).not.toBeNull();
      expect(rule.method).toBe('GET');
      expect(rule.url).toBe('/users/2');
    });

    it('should be starts with URL in route param', () => {
      expect(srv.getRule('GET', '/org/users/2')).toBeNull();
    });

    it('should be support regex', () => {
      const url = '/data/2';
      const rule = srv.getRule('GET', url);
      expect(rule).not.toBeNull();
      expect(rule.url).toBe(url);
    });

    it('should be full url priority', () => {
      const editRule = srv.getRule('GET', '/users/1/edit');
      const editRes = editRule.callback(editRule as any);
      expect(editRes.s).toBe('edit');
      const detailRule = srv.getRule('GET', '/users/1');
      expect((detailRule.callback as any).rank).not.toBeUndefined();
    });

    it('should be exact match priority', () => {
      const detail1Rule = srv.getRule('GET', '/users/1');
      expect((detail1Rule.callback as any).rank).not.toBeUndefined();
      const detail2Rule = srv.getRule('GET', '/users/2');
      expect(detail2Rule.callback.name).toBe('/users/:id');
    });
  });

  describe('#apply', () => {
    it('should allow empty data', () => {
      genModule({
        data: null,
      });
      expect(srv.rules.length).toBe(0);
    });

    it('should allow empty rule', () => {
      genModule({
        data: {
          '/a': null,
        },
      });
      expect(srv.rules.length).toBe(0);
    });

    it('should be overwrite rule when same url & method', () => {
      genModule({
        data: {
          USERS: {
            '/users': { a: 1 },
          },
          USER: {
            '/users': { a: 2 },
          },
        },
      });
      expect(srv.rules.length).toBe(1);
      const rule = srv.getRule('GET', '/users');
      expect(rule).not.toBeNull();
      expect((rule.callback as any).a).toBe(2);
    });

    it('should be throw invalid method error', () => {
      expect(() => {
        spyOn(console, 'log');
        spyOn(console, 'warn');
        genModule({
          data: {
            USERS: {
              'AAA /users': {},
            },
          },
        });
      }).toThrow();
    });

    it('should be throw invalid function error', () => {
      expect(() => {
        spyOn(console, 'log');
        spyOn(console, 'warn');
        genModule({
          data: {
            USERS: {
              'AAA /users': 1,
            },
          },
        });
      }).toThrowError();
    });
  });

  it('#clearCache', () => {
    genModule({ data: DATA });
    srv.clearCache();
    const rule = srv.getRule('POST', '/users/1');
    expect(rule).toBeNull();
  });
});
