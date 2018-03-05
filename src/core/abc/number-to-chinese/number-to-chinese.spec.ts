import { numberToChinese } from './number-to-chinese';

describe('#numberToChinese', () => {
    [
        { rmb: false, num: 0.1234567890, value: '零点一二三四五六七八九' },
        { rmb: true, num: 0.1234567890, value: '零元壹角贰分叁厘肆毫' },
        { rmb: false, num: 20000000000000000, value: '两兆' },
        { rmb: true, num: 20000000000000000, value: '贰兆元整' },
        { rmb: false, num: 0, value: '零' },
        { rmb: true, num: 0, value: '零元整' },
        { rmb: false, num: 0.0, value: '零' },
        { rmb: true, num: 0.0, value: '零元整' },
        { rmb: false, num: -1202030, value: '负一百二十万零两千零三十' },
        { rmb: true, num: -1202030, value: '负壹佰贰拾万零贰仟零叁拾元整' },
        { rmb: false, num: -1202030, value: '欠一百二十万零两千零三十', options: { minusSymbol: '欠' } },
        { rmb: true, num: -1202030, value: '欠壹佰贰拾万零贰仟零叁拾元整', options: { minusSymbol: '欠' } }
    ].forEach((item: any) => {
        it(`${item.rmb ? 'RMB:' : ''}${item.num} muse be ${item.value}`, () => {
            expect(numberToChinese(item.num, item.rmb, item.options || null)).toBe(item.value);
        });
    });

    it('should be throw when validThrow: true', () => {
        expect(() => {
            numberToChinese('asdf', true, {
                validThrow: true
            });
        }).toThrow();
    });
});
