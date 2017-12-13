import { ACLService } from './acl.service';
import { ACLType } from './acl.type';

describe('acl: service', () => {

    const ADMIN = 'admin';
    const USER = 'user';
    const ABILITY = 'order-cancel';
    const ABILITY_NUMBER = 1;

    let srv: ACLService = null;

    beforeEach(() => {
        srv = new ACLService();
        srv.set(<ACLType>{ role: [ADMIN] });
    });

    it(`#set()`, () => {
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can(USER)).toBe(false);
    });

    it(`#setFull() set [true]`, () => {
        srv.setFull(true);
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can(USER)).toBe(true);
    });

    it(`#setFull() set [false]`, () => {
        srv.setFull(false);
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can(USER)).toBe(false);
    });

    it(`#setAbility() set [${ABILITY}]`, () => {
        srv.setAbility([ABILITY]);
        expect(srv.canAbility(ABILITY)).toBe(true);
        expect(srv.canAbility(ABILITY + `1`)).toBe(false);
    });

    it(`#setRole()`, () => {
        srv.setRole([ADMIN]);
        expect(srv.can(ADMIN)).toBe(true);
    });

    it(`#add()`, () => {
        srv.add({
            role: ['NEWROLE'],
            ability: ['NEWABILITY']
        });
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can('NEWROLE')).toBe(true);
        expect(srv.canAbility('NEWABILITY')).toBe(true);
    });

    it(`#attachRole()`, () => {
        srv.attachRole(['NEWROLE', ADMIN]);
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.can('NEWROLE')).toBe(true);
    });

    it(`#attachAbility()`, () => {
        srv.attachAbility(['NEWABILITY', ADMIN, 'INVALID']);
        expect(srv.can(ADMIN)).toBe(true);
        expect(srv.canAbility('NEWABILITYINVALID')).toBe(false);
        expect(srv.canAbility('NEWABILITY')).toBe(true);
    });

    it(`#removeRole()`, () => {
        expect(srv.can(ADMIN)).toBe(true);
        srv.removeRole([ADMIN, 'INVALID']);
        expect(srv.can(ADMIN)).toBe(false);
    });

    it(`#removeAbility()`, () => {
        srv.attachAbility([ABILITY]);
        expect(srv.canAbility(ABILITY)).toBe(true);
        srv.removeAbility([ABILITY, 10]);
        expect(srv.canAbility(ABILITY)).toBe(false);
    });

    it(`#can()`, () => {
        srv.attachAbility([ABILITY_NUMBER]);
        expect(srv.can(ADMIN)).toBe(true, 'can ' + ADMIN);
        expect(srv.can(ABILITY_NUMBER)).toBe(true, 'ability muse be true');
        expect(srv.can([ABILITY_NUMBER])).toBe(true, 'ability array muse be true');
        expect(srv.can([ADMIN])).toBe(true, 'role array muse be true');
        expect(srv.can(<ACLType>{ role: [ ADMIN ] })).toBe(true, 'ACLType item muse be true');
        expect(srv.can(ADMIN + '1')).toBe(false);
    });

    it(`#canAbility()`, () => {
        srv.attachAbility([ABILITY]);
        expect(srv.canAbility(ABILITY)).toBe(true);
        expect(srv.canAbility(ADMIN + '1')).toBe(false);
    });
});
