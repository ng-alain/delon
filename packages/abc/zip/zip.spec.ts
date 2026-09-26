import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';

import { saveAs } from 'file-saver';

import { LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ZipService } from './zip.service';

// Vite 预打包后具名导入是快照，spyOn 模块对象无法影响服务内部的 saveAs
vi.mock('file-saver', () => ({ saveAs: vi.fn() }));

let isErrorRequest = false;
let isClassZIP = false;
let isErrorGenZip = false;
class JSZip {
  file(): void {}
  generateAsync(): Promise<void> {
    return isErrorGenZip ? Promise.reject('') : Promise.resolve();
  }
}
class MockLazyService {
  load(): Promise<void> {
    (window as NzSafeAny).JSZip = isClassZIP ? JSZip : DEFAULTMOCKJSZIP;
    return Promise.resolve();
  }
}

const DEFAULTMOCKJSZIP = {
  loadAsync: () => {
    return Promise.resolve();
  },
  write: () => {}
};

class MockHttpClient {
  request(): Observable<null> {
    return isErrorRequest ? throwError(() => null) : of(null);
  }
}

describe('abc: zip', () => {
  let srv: ZipService;
  function genModule(): void {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: LazyService, useClass: MockLazyService }
      ]
    });
    srv = TestBed.inject<ZipService>(ZipService);
  }

  beforeEach(() => {
    isErrorRequest = false;
    isClassZIP = false;
    isErrorGenZip = false;
  });

  describe('#read', () => {
    it('should be load zip via url', async () => {
      genModule();
      await expect(srv.read('/1.zip')).resolves.toBeUndefined();
    });

    it('should be reject when request error via url', async () => {
      isErrorRequest = true;
      genModule();
      await expect(srv.read('/1.zip')).rejects.toBeNull();
    });

    it('should be load zip via file object', async () => {
      genModule();
      await expect(srv.read(new File([], '1.zip'))).resolves.toBeUndefined();
    });
  });

  describe('#create', () => {
    it('should be working', async () => {
      isClassZIP = true;
      genModule();
      await expect(srv.create()).resolves.not.toBeNull();
    });

    it('should be error', async () => {
      genModule();
      const lazySrv = TestBed.inject<LazyService>(LazyService);
      vi.spyOn(lazySrv, 'load').mockRejectedValue(undefined);
      await expect(srv.create()).resolves.toBeNull();
    });
  });

  describe('#pushUrl', () => {
    let zip: NzSafeAny;
    beforeEach(async () => {
      isClassZIP = true;
      genModule();
      await srv.create().then(res => {
        zip = res;
      });
    });
    it('should be save zip file', async () => {
      await expect(srv.pushUrl(zip, '1.zip', '1.zip')).resolves.toBeUndefined();
    });
    it('should be reject when bad request', async () => {
      isErrorRequest = true;
      await expect(srv.pushUrl(zip, '1.zip', '1.zip')).rejects.toBeTruthy();
    });
  });

  describe('#save', () => {
    let zip: NzSafeAny;
    beforeEach(async () => {
      isClassZIP = true;
      genModule();
      await srv.create().then(res => {
        zip = res;
      });
    });
    it('should be save zip file', async () => {
      await expect(srv.save(zip, { filename: '123.zip' })).resolves.toBeUndefined();
      expect(saveAs).toHaveBeenCalled();
    });
    it('should be call callback', async () => {
      let count = 0;
      await expect(srv.save(zip, { callback: () => ++count })).resolves.toBeUndefined();
      expect(count).toBe(1);
      expect(saveAs).toHaveBeenCalled();
    });
    it('should be reject when generateAsync return error', async () => {
      isErrorGenZip = true;
      await expect(srv.save(zip)).rejects.toBe('');
      expect(saveAs).not.toHaveBeenCalled();
    });
    it('should be throw error when invalid zip', () => {
      zip = null;
      expect(() => {
        srv.save(zip);
      }).toThrow();
    });
  });
});
