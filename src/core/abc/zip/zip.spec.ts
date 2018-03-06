import { TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { LazyService } from '@delon/abc';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import * as fs from 'file-saver';

import { AdZipModule, ZipService, ZipConfig } from './index';

let isErrorRequest = false;
let isClassZIP = false;
let isErrorGenZip = false;
class MockLazyService {
    load() {
        (window as any).JSZip = isClassZIP ?
            class JSZip {
                file() {}
                generateAsync() {
                    return isErrorGenZip ? Promise.reject('') : Promise.resolve();
                }
            } :
            DEFAULTMOCKJSZIP;
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
    request() {
        return isErrorRequest ? _throw(null) : of(null);
    }
}

describe('abc: zip', () => {
    let srv: ZipService;
    function genModule(options?: ZipConfig) {
        const injector = TestBed.configureTestingModule({
            imports: [ AdZipModule.forRoot(options) ],
            providers: [
                { provide: HttpClient, useClass: MockHttpClient },
                { provide: LazyService, useClass: MockLazyService }
            ]
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
            srv.read('/1.zip').then(() => {
                expect(true).toBe(true);
                done();
            }, () => {
                expect(false).toBe(true);
                done();
            });
        });

        it('should be reject when request error via url', (done: () => void) => {
            isErrorRequest = true;
            genModule();
            srv.read('/1.zip').then(() => {
                expect(false).toBe(true);
                done();
            }, () => {
                expect(true).toBe(true);
                done();
            });
        });

        it('should be load zip via file object', (done: () => void) => {
            genModule();
            srv.read(new File([], '1.zip')).then(() => {
                expect(true).toBe(true);
                done();
            }, () => {
                expect(false).toBe(true);
                done();
            });
        });
    });

    it('#create', (done: () => void) => {
        isClassZIP = true;
        genModule();
        srv.create().then((res) => {
            expect(true).toBe(true);
            done();
        }, () => {
            expect(false).toBe(true);
            done();
        });
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
            srv.pushUrl(zip, '1.zip', '1.zip').then((res) => {
                expect(true).toBe(true);
                done();
            }, () => {
                expect(false).toBe(true);
                done();
            });
        });
        it('should be reject when bad request', (done: () => void) => {
            isErrorRequest = true;
            srv.pushUrl(zip, '1.zip', '1.zip').then((res) => {
                expect(false).toBe(true);
                done();
            }, () => {
                expect(true).toBe(true);
                done();
            });
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
            spyOn(fs, 'saveAs');
            srv.save(zip, { filename: '123.zip' }).then((res) => {
                expect(fs.saveAs).toHaveBeenCalled();
                expect(true).toBe(true);
                done();
            }, () => {
                expect(false).toBe(true);
                done();
            });
        });
        it('should be call callback', (done: () => void) => {
            spyOn(fs, 'saveAs');
            let count = 0;
            srv.save(zip, {
                callback: () => ++count
            }).then((res) => {
                expect(count).toBe(1);
                expect(fs.saveAs).toHaveBeenCalled();
                done();
            }, () => {
                expect(false).toBe(true);
                done();
            });
        });
        it('should be reject when generateAsync return error', (done: () => void) => {
            isErrorGenZip = true;
            spyOn(fs, 'saveAs');
            srv.save(zip).then((res) => {
                expect(false).toBe(true);
                done();
            }, () => {
                expect(fs.saveAs).not.toHaveBeenCalled();
                expect(true).toBe(true);
                done();
            });
        });
        it('should be throw error when invalid zip', () => {
            zip = null;
            expect(() => {
                srv.save(zip);
            }).toThrowError();
        });
    });
});
