import { AlainI18NServiceFake } from './i18n';

describe('theme: i18n', () => {
    const i18n = new AlainI18NServiceFake();

    it('#use', () => {
        i18n.use('zh-CN', false);
        expect(true).toBeTruthy();
    });

    it('#getLangs', () => {
        expect(i18n.getLangs().length).toBe(0);
    });

    it('#fanyi', () => {
        expect(i18n.fanyi('index')).toBe('index');
    });
});
