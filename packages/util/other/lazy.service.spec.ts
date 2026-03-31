import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, take } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { LazyService } from './lazy.service';

let testStatus = 'ok';
class MockDocument {
  querySelectorAll(): NzSafeAny {
    return {};
  }
  getElementsByTagName = (): NzSafeAny => {
    return [
      {
        appendChild: (node: NzSafeAny) => {
          if (node.testStatus === 'ok') {
            if (node.readyState) {
              node.readyState = 'complete';
              node.onreadystatechange();
            } else {
              node.onload();
            }
            return;
          }
          node.onerror();
        }
      }
    ];
  };
  createElement = (): NzSafeAny => {
    const ret: NzSafeAny = {
      testStatus,
      onload: () => {}
    };
    return ret;
  };
}

describe('utils: lazy', () => {
  let srv: LazyService;
  let doc: Document;
  beforeEach(() => {
    testStatus = 'ok';
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT, useClass: MockDocument }]
    });
    srv = TestBed.inject(LazyService);
    srv.clear();
    doc = TestBed.inject(DOCUMENT);
  });

  it('should be load via LazyLoadItem', () => {
    const res: NzSafeAny = {};
    const content = 'var a = 1;';
    vi.spyOn(doc, 'createElement').mockImplementation(() => res);
    srv.load([{ path: '1.js', options: { innerContent: content } }]);
    expect(res.innerHTML).toBe(content);
  });

  describe('Scripts', () => {
    it('should be load a js resource', async () => {
      const resPromise = firstValueFrom(srv.change.pipe(take(1)));
      srv.load('/1.js');
      const res = await resPromise;
      expect(res[0].status).toBe('ok');
    });
    it('should be custom content', () => {
      const res: NzSafeAny = {};
      const content = 'var a = 1;';
      vi.spyOn(doc, 'createElement').mockImplementation(() => res);
      srv.loadScript('/1.js', { innerContent: content });
      expect(res.innerHTML).toBe(content);
    });
  });

  describe('Styles', () => {
    it('should be load a css resource', async () => {
      const resPromise = firstValueFrom(srv.change.pipe(take(1)));
      srv.load('/1.css');
      const res = await resPromise;
      expect(res[0].status).toBe('ok');
    });
    it('should be load a less resource', async () => {
      const res = await srv.loadStyle('/1.less', { rel: 'stylesheet/less' });
      expect(res.status).toBe('ok');
    });
    it('should be custom content', () => {
      const res: NzSafeAny = {
        onerror(): void {}
      };
      const content = 'var a = 1;';
      vi.spyOn(doc, 'createElement').mockImplementation(() => res);
      srv.loadStyle('/1.js', { rel: 'stylesheet/less', innerContent: content });
      expect(res.innerHTML).toBe(content);
    });
  });

  it('should be immediately when loaded a js resource', () => {
    let count = 0;
    vi.spyOn(doc, 'createElement').mockImplementation(() => {
      ++count;
      return new MockDocument().createElement();
    });
    srv.load('/2.js');
    expect(count).toBe(1);
    srv.load('/2.js');
    expect(count).toBe(1);
  });

  it('should be immediately when loaded a css resource', () => {
    let count = 0;
    vi.spyOn(doc, 'createElement').mockImplementation(() => {
      ++count;
      return new MockDocument().createElement();
    });
    srv.load('/2.css');
    expect(count).toBe(1);
    srv.load('/2.css');
    expect(count).toBe(1);
  });

  it('should be bad resource', async () => {
    testStatus = 'bad';
    const resPromise = firstValueFrom(srv.change.pipe(take(1)));
    srv.load('/3.js');
    const res = await resPromise;
    expect(res[0].status).toBe('error');
  });

  describe('#attributes', () => {
    it('should be working', () => {
      const res: NzSafeAny = {
        setAttribute(key: string, value: string): void {
          res[key] = value;
        }
      };
      vi.spyOn(doc, 'createElement').mockImplementation(() => res);
      srv.loadScript('/1.js', { innerContent: '', attributes: { a: 'b' } });
      expect(res.a).toBe('b');
    });
  });
});
