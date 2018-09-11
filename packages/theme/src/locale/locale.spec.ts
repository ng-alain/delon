import zh_CN from '../../locales/zh-CN';
import en_US from '../../locales/en-US';
import { DelonI18nService } from './locale.service';
import { filter } from 'rxjs/operators';

describe('theme: locale', () => {
  let locale: DelonI18nService;
  beforeEach(() => (locale = new DelonI18nService(zh_CN)));

  describe('#setLocale', () => {
    it('should working', () => {
      locale.setLocale(en_US);
      expect(locale.locale.abbr).toBe(en_US.abbr);
    });
    it('should be ingore change when new and old are the same', () => {
      expect(locale.locale.abbr).toBe(zh_CN.abbr);
      locale.setLocale(zh_CN);
      expect(locale.locale.abbr).toBe(zh_CN.abbr);
    });
  });

  it('#getData', () => {
    expect(locale.getData('exception').backToHome).toBe(
      zh_CN.exception.backToHome,
    );
  });

  it('#change', done => {
    locale.change.pipe(filter(l => l.abbr === en_US.abbr)).subscribe(() => {
      expect(true).toBe(true);
      done();
    });
    locale.setLocale(en_US);
  });
});
