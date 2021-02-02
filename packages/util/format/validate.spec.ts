import * as v from './validate';

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
  ip: [
    { k: '0.0.0.0', v: true },
    { k: '172.26.168.134', v: true },
    { k: '46.51.197.88', v: true },
    { k: '192.168.0.1', v: true },
    { k: '.100.100.100.100', v: false },
    { k: 'http://123.123.123', v: false },
    { k: '999.2.3.4', v: false },
    { k: '::', v: true },
    { k: '1::', v: true },
    { k: '::1', v: true },
    { k: '1:2:3:4:5:6:7:8', v: true },
    { k: '2001:0000:1234:0000:0000:C1C0:ABCD:0876', v: true },
    { k: ':', v: false },
    { k: '1:', v: false },
    { k: ':1', v: false },
  ],
  color: [
    { k: '#ffffff', v: true },
    { k: '#fff', v: true },
    { k: 'rgb(255,0,24)', v: true },
    { k: 'rgba(255, 0, 24, 0.5)', v: true },
    { k: 'hsla(170, 23%, 25%, 0.2 )', v: true },
    { k: '0x00ffff', v: true },
    { k: 'black', v: false },
    { k: '#f2ewq', v: false },
  ],
  chinese: [
    { k: '中国', v: true },
    { k: '中国a', v: false },
  ],
};

describe('utils: format-validate', () => {
  function process(methodName: keyof typeof v, data: Array<{ k: string; v: boolean }>): void {
    for (const item of data) {
      expect((v[methodName] as any)(item.k)).toBe(item.v, `[${methodName}] ${item.k} must be ${item.v}`);
    }
  }

  it('#isNum', () => process('isNum', TEST_DATA.num as any));
  it('#isInt', () => process('isInt', TEST_DATA.int as any));
  it('#isDecimal', () => process('isDecimal', TEST_DATA.decimal as any));
  it('#isIdCard', () => process('isIdCard', TEST_DATA.idCard as any));
  it('#isMobile', () => process('isMobile', TEST_DATA.mobile as any));
  it('#isUrl', () => process('isUrl', TEST_DATA.url as any));
  it('#isIp', () => process('isIp', TEST_DATA.ip as any));
  it('#isColor', () => process('isColor', TEST_DATA.color as any));
  it('#isChinese', () => process('isChinese', TEST_DATA.chinese as any));
});
