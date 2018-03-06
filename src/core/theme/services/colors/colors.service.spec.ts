import { ColorsService } from './colors.service';

describe('theme: colors.service', () => {
    const srv = new ColorsService();

    it('#byName', () => {
        expect(srv.byName('primary')).toBe('#108ee9');
        expect(srv.byName('INVALID')).toBe('#fff', 'INVALID name muse be #fff');
    });

    it('#colors', () => {
        expect(srv.colors).not.toBeNull();
        // tslint:disable-next-line:forin
        for (const key in srv.colors) {
            expect(srv.colors[key]).toBe(srv.byName(key));
        }
    });

    it('#names', () => {
        for (const c of srv.names) {
            expect(srv.names).toContain(c);
        }
    });

    it('#brands', () => {
        for (const c of srv.brands) {
            expect(srv.brands).toContain(c);
        }
    });
});
