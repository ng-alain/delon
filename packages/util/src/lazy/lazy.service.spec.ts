import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { DelonUtilModule } from '../util.module';
import { LazyService } from './lazy.service';

let isIE = false;
let testStatus = 'ok';
class MockDocument {
  getElementsByTagName = () => {
    return [
      {
        appendChild: node => {
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
        },
      },
    ];
  };
  createElement = () => {
    const ret: any = {
      testStatus,
      onload: () => {},
    };
    if (isIE) ret.readyState = 'loading';
    return ret;
  };
}

describe('utils: lazy', () => {
  let srv: LazyService;
  let doc: Document;
  beforeEach(() => {
    isIE = false;
    testStatus = 'ok';
    const injector = TestBed.configureTestingModule({
      imports: [DelonUtilModule],
      providers: [{ provide: DOCUMENT, useClass: MockDocument }],
    });
    srv = injector.get(LazyService);
    srv.clear();
    doc = injector.get(DOCUMENT);
  });

  describe('#IE', () => {
    it('should be load a js resource', () => {
      isIE = true;
      srv.change.subscribe(res => {
        expect(res[0].status).toBe('ok');
      });
      srv.load(['/1.js']);
    });
    it('should be load a js resource unit stauts is complete', (done: () => void) => {
      isIE = true;
      const mockGetElementsByTagName = () => {
        const mockObj = new MockDocument().getElementsByTagName();
        mockObj[0].appendChild = node => {
          node.readyState = 'mock-status';
          node.onreadystatechange();
          node.readyState = 'complete';
          node.onreadystatechange();
        };
        return mockObj;
      };
      // tslint:disable-next-line: unnecessary-bind
      spyOn(doc, 'getElementsByTagName').and.callFake(mockGetElementsByTagName.bind(this));
      srv.change.subscribe(res => {
        expect(res[0].status).toBe('ok');
        done();
      });
      srv.load(['/1.js']);
    });
  });

  describe('Scripts', () => {
    it('should be load a js resource', () => {
      srv.change.subscribe(res => {
        expect(res[0].status).toBe('ok');
      });
      srv.load('/1.js');
    });
    it('should be custom content', () => {
      const res: any = {};
      const content = 'var a = 1;';
      spyOn(doc, 'createElement').and.callFake(() => res);
      srv.loadScript('/1.js', content);
      expect(res.innerHTML).toBe(content);
    });
  });

  describe('Styles', () => {
    it('should be load a css resource', () => {
      srv.change.subscribe(res => {
        expect(res[0].status).toBe('ok');
      });
      srv.load('/1.css');
    });
    it('should be load a less resource', () => {
      srv.loadStyle('/1.less', 'stylesheet/less').then(res => {
        expect(res.status).toBe('ok');
      });
    });
    it('should be custom content', () => {
      const res: any = {
        onerror() {},
      };
      const content = 'var a = 1;';
      spyOn(doc, 'createElement').and.callFake(() => res);
      srv.loadStyle('/1.js', 'stylesheet/less', content);
      expect(res.innerHTML).toBe(content);
    });
  });

  it('should be immediately when loaded a js resource', () => {
    let count = 0;
    spyOn(doc, 'createElement').and.callFake(() => {
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
    spyOn(doc, 'createElement').and.callFake(() => {
      ++count;
      return new MockDocument().createElement();
    });
    srv.load('/2.css');
    expect(count).toBe(1);
    srv.load('/2.css');
    expect(count).toBe(1);
  });

  it('should be bad resource', () => {
    testStatus = 'bad';
    srv.change.subscribe(res => {
      expect(res[0].status).toBe('error');
    });
    srv.load('/3.js');
  });
});
