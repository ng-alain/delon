import { preloaderFinished } from './preloader';

describe('theme: preloader', () => {

    beforeEach(() => {
        const cached = {};
        spyOn(document, 'querySelector').and.callFake((type: string) => {
            if (cached[type]) return cached[type];
            cached[type] = {
                className: [],
                style: {
                    overflow: ''
                },
                addEventListener: (key: string, fn: any) => {
                }
            };
            return cached[type];
        });
    });

    it('should be remove preloader', (done: () => void) => {
        const body = document.querySelector('body');
        const preloader = document.querySelector('.preloader');
        preloaderFinished();
        expect(body.style.overflow).toBe('hidden');

        (<any>window).appBootstrap();
        setTimeout(() => {
            expect(body.style.overflow).toBe('');
            done();
        }, 200);

    });
});
