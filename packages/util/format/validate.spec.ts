import { isDecimal, isIdCard, isInt, isIp4, isMobile, isNum, isUrl } from './validate';

export const TEST_DATA = {
  num: [
    { k: '123', v: true },
    { k: '12.3', v: true },
    { k: '12.', v: false },
    { k: '-12', v: true },
    { k: 123, v: true },
    { k: '123.1.2', v: false },
    { k: '123a', v: false },
  ],
  int: [
    { k: '123', v: true },
    { k: 123, v: true },
    { k: '123.1', v: false },
    { k: '123.123', v: false },
  ],
  decimal: [
    { k: '12.3', v: true },
    { k: '-12.3', v: true },
    { k: '123', v: false },
    { k: '12.', v: false },
    { k: '-12', v: false },
    { k: 123, v: false },
    { k: '123.1.2', v: false },
    { k: '123a', v: false },
  ],
  idCard: [
    { k: '610102198006042614', v: true },
    { k: '61010219800604261', v: false },
  ],
  mobile: [
    { k: '15900000000', v: true },
    { k: '17000000000', v: true },
    { k: '14700000000', v: true },
    { k: '1590000000', v: false },
    { k: '+8615900000000', v: true },
  ],
  url: [
    { k: 'http://ng-alain.com', v: true },
    { k: 'https://ng-alain.com', v: true },
    { k: '//ng-alain.com', v: false },
    { k: 'ng-alain.com', v: false },
    { k: '中国.com', v: false },
  ],
  ip4: [
    { k: '0.0.0.0', v: true },
    { k: '172.26.168.134', v: true },
    { k: '46.51.197.88', v: true },
    { k: '192.168.0.1', v: true },
    { k: '.100.100.100.100', v: false },
    { k: 'http://123.123.123', v: false },
    { k: '999.2.3.4', v: false },
  ],
};

describe('utils: validate', () => {
  it('#isNum', () => {
    for (const item of TEST_DATA.num) {
      expect(isNum(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);
    }
  });

  it('#isInt', () => {
    for (const item of TEST_DATA.int) {
      expect(isInt(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);
    }
  });

  it('#isDecimal', () => {
    for (const item of TEST_DATA.decimal) {
      expect(isDecimal(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);
    }
  });

  it('#isIdCard', () => {
    for (const item of TEST_DATA.idCard) {
      expect(isIdCard(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);
    }
  });

  it('#isMobile', () => {
    for (const item of TEST_DATA.mobile) {
      expect(isMobile(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);
    }
  });

  it('#isUrl', () => {
    for (const item of TEST_DATA.url) {
      expect(isUrl(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);
    }
  });

  it('#isIp4', () => {
    for (const item of TEST_DATA.ip4) {
      expect(isIp4(item.k)).toBe(item.v, `${item.k}=${typeof item.k} must be ${item.v}`);
    }
  });
});
