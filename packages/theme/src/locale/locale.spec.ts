import { filter } from 'rxjs/operators';
import { DelonLocaleService } from './locale.service';

import enUS from './languages/en-US';
import zhCN from './languages/zh-CN';

describe('theme: locale', () => {
  let locale: DelonLocaleService;
  beforeEach(() => (locale = new DelonLocaleService(zhCN)));

  describe('#setLocale', () => {
    it('should working', () => {
      locale.setLocale(enUS);
      expect(locale.locale.abbr).toBe(enUS.abbr);
    });
    it('should be default language is zh-cn', () => {
      locale = new DelonLocaleService(null);
      expect(locale.locale.abbr).toBe(zhCN.abbr);
    });
    it('should be ingore change when new and old are the same', () => {
      expect(locale.locale.abbr).toBe(zhCN.abbr);
      locale.setLocale(zhCN);
      expect(locale.locale.abbr).toBe(zhCN.abbr);
    });
  });

  it('#getData', () => {
    expect(locale.getData('exception').backToHome).toBe(zhCN.exception.backToHome);
    expect(Object.keys(locale.getData('invalid-key')).length).toBe(0);
  });

  it('#change', done => {
    locale.change.pipe(filter(l => l.abbr === enUS.abbr)).subscribe(() => {
      expect(true).toBe(true);
      done();
    });
    locale.setLocale(enUS);
  });
});
