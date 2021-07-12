import { of } from 'rxjs';

import { assert, assertArray, assertEmpty, assertNumber, assertObservable, assertString } from './assert';
declare let ngDevMode: boolean;

describe('util.#assert', () => {
  it('should be disabled throw error when in production', () => {
    const orgNgDevMode = ngDevMode;
    ngDevMode = false;
    expect(() => assert(false)).not.toThrow();
    ngDevMode = orgNgDevMode;
  });
  describe('#assert', () => {
    it('should be throw error when is fail', () => {
      expect(() => assert(false)).toThrow();
    });
    it('should be nothing when is success', () => {
      expect(() => assert(true)).not.toThrow();
    });
    it('should be throw specify error message', () => {
      expect(() => assert(false, 'ABC')).toThrowMatching((err: Error) => err.message.includes(`ABC`));
    });
  });
  describe('#assertEmpty', () => {
    it('FAIL', () => {
      expect(() => assertEmpty(null)).toThrow();
      expect(() => assertEmpty(undefined)).toThrow();
    });
    it('SUCCESS', () => {
      expect(() => assertEmpty(1)).not.toThrow();
    });
  });
  describe('#assertNumber', () => {
    it('FAIL', () => {
      expect(() => assertNumber('a')).toThrow();
    });
    it('SUCCESS', () => {
      expect(() => assertNumber(1)).not.toThrow();
    });
  });
  describe('#assertString', () => {
    it('FAIL', () => {
      expect(() => assertString(1)).toThrow();
    });
    it('SUCCESS', () => {
      expect(() => assertString('a')).not.toThrow();
    });
  });
  describe('#assertArray', () => {
    it('FAIL', () => {
      expect(() => assertArray(1)).toThrow();
    });
    it('SUCCESS', () => {
      expect(() => assertArray(['a'])).not.toThrow();
    });
  });
  describe('#assertObservable', () => {
    it('FAIL', () => {
      expect(() => assertObservable(1)).toThrow();
    });
    it('SUCCESS', () => {
      expect(() => assertObservable(of())).not.toThrow();
    });
  });
});
