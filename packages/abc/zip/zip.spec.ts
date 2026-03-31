/* eslint-disable */
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';

import fs from 'file-saver';

import { LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ZipService } from './zip.service';

let isErrorRequest = false;
let isClassZIP = false;
let isErrorGenZip = false;
class JSZip {
  file(): void {}
  generateAsync(): Promise<Blob> {
    return isErrorGenZip ? Promise.reject('') : Promise.resolve(new Blob(['test'], { type: 'application/zip' }));
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
      await expect(srv.read('/1.zip')).rejects.toBeTruthy();
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
      const res = await srv.create();
      expect(res).not.toBeNull();
    });

    it('should be error', async () => {
      genModule();
      const lazySrv = TestBed.inject<LazyService>(LazyService);
      vi.spyOn(lazySrv, 'load').mockReturnValue(Promise.reject());
      const res = await srv.create();
      expect(res).toBeNull();
    });
  });

  describe('#pushUrl', () => {
    let zip: NzSafeAny;
    beforeEach(async () => {
      isClassZIP = true;
      genModule();
      zip = await srv.create();
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
    let saveAsSpy: NzSafeAny;
    beforeEach(async () => {
      isClassZIP = true;
      genModule();
      zip = await srv.create();
      // Mock file-saver properly
      saveAsSpy = vi.fn().mockImplementation(() => {});
      vi.spyOn(fs, 'saveAs').mockImplementation(saveAsSpy);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should be save zip file', async () => {
      await srv.save(zip, { filename: '123.zip' });
      expect(saveAsSpy).toHaveBeenCalled();
    });
    it('should be call callback', async () => {
      let count = 0;
      await srv.save(zip, { callback: () => ++count });
      expect(count).toBe(1);
      expect(saveAsSpy).toHaveBeenCalled();
    });
    it('should be reject when generateAsync return error', async () => {
      isErrorGenZip = true;
      await expect(srv.save(zip)).rejects.toBeTruthy();
      expect(saveAsSpy).not.toHaveBeenCalled();
    });
    it('should be throw error when invalid zip', () => {
      zip = null;
      expect(() => {
        srv.save(zip);
      }).toThrowError();
    });
  });
});
