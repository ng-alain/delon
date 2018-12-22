import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LazyService } from '@delon/util';
import * as fs from 'file-saver';
import { of, throwError } from 'rxjs';
import { ZipModule } from './zip.module';
import { ZipService } from './zip.service';

let isErrorRequest = false;
let isClassZIP = false;
let isErrorGenZip = false;
class MockLazyService {
  load() {
    (window as any).JSZip = isClassZIP
      ? class JSZip {
          file() {}
          generateAsync() {
            return isErrorGenZip ? Promise.reject('') : Promise.resolve();
          }
        }
      : DEFAULTMOCKJSZIP;
    return Promise.resolve();
  }
}

const DEFAULTMOCKJSZIP = {
  loadAsync: () => {
    return Promise.resolve();
  },
  write: () => {},
};

class MockHttpClient {
  request() {
    return isErrorRequest ? throwError(null) : of(null);
  }
}

describe('abc: zip', () => {
  let srv: ZipService;
  function genModule() {
    const injector = TestBed.configureTestingModule({
      imports: [ZipModule],
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: LazyService, useClass: MockLazyService },
      ],
    });
    srv = injector.get(ZipService);
  }

  beforeEach(() => {
    isErrorRequest = false;
    isClassZIP = false;
    isErrorGenZip = false;
  });

  describe('#read', () => {
    it('should be load zip via url', (done: () => void) => {
      genModule();
      srv.read('/1.zip').then(
        () => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        },
      );
    });

    it('should be reject when request error via url', (done: () => void) => {
      isErrorRequest = true;
      genModule();
      srv.read('/1.zip').then(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(true).toBe(true);
          done();
        },
      );
    });

    it('should be load zip via file object', (done: () => void) => {
      genModule();
      srv.read(new File([], '1.zip')).then(
        () => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        },
      );
    });
  });

  it('#create', (done: () => void) => {
    isClassZIP = true;
    genModule();
    srv.create().then(
      res => {
        expect(true).toBe(true);
        done();
      },
      () => {
        expect(false).toBe(true);
        done();
      },
    );
  });

  describe('#pushUrl', () => {
    let zip: any;
    beforeEach((done: () => void) => {
      isClassZIP = true;
      genModule();
      srv.create().then(res => {
        zip = res;
        done();
      });
    });
    it('should be save zip file', (done: () => void) => {
      srv.pushUrl(zip, '1.zip', '1.zip').then(
        res => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        },
      );
    });
    it('should be reject when bad request', (done: () => void) => {
      isErrorRequest = true;
      srv.pushUrl(zip, '1.zip', '1.zip').then(
        res => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(true).toBe(true);
          done();
        },
      );
    });
  });

  describe('#save', () => {
    let zip: any;
    beforeEach((done: () => void) => {
      isClassZIP = true;
      genModule();
      srv.create().then(res => {
        zip = res;
        done();
      });
    });
    it('should be save zip file', (done: () => void) => {
      spyOn(fs.default, 'saveAs');
      srv.save(zip, { filename: '123.zip' }).then(
        res => {
          expect(fs.default.saveAs).toHaveBeenCalled();
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        },
      );
    });
    it('should be call callback', (done: () => void) => {
      spyOn(fs.default, 'saveAs');
      let count = 0;
      srv
        .save(zip, {
          callback: () => ++count,
        })
        .then(
          res => {
            expect(count).toBe(1);
            expect(fs.default.saveAs).toHaveBeenCalled();
            done();
          },
          () => {
            expect(false).toBe(true);
            done();
          },
        );
    });
    it('should be reject when generateAsync return error', (done: () => void) => {
      isErrorGenZip = true;
      spyOn(fs.default, 'saveAs');
      srv.save(zip).then(
        res => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(fs.default.saveAs).not.toHaveBeenCalled();
          expect(true).toBe(true);
          done();
        },
      );
    });
    it('should be throw error when invalid zip', () => {
      zip = null;
      expect(() => {
        srv.save(zip);
      }).toThrowError();
    });
  });
});
