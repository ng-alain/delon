import { ColorsService } from './colors.service';

describe('theme: colors.service', () => {
    const srv = new ColorsService();

    it('#byName', () => {
        expect(srv.byName('primary')).toBe('#108ee9');
        expect(srv.byName('INVALID')).toBe('#fff', 'INVALID name muse be #fff');
    });

    it('#colors', () => {
        expect(srv.colors).not.toBeNull();
        expect(srv.colors.success).toBe('#00a854');
    });

    it('#names', () => {
        expect(srv.names).toContain('red');
    });

    it('#brands', () => {
        expect(srv.brands).toContain('primary');
    });
});
