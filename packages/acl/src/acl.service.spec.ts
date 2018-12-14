import { ACLService } from './acl.service';
import { ACLType } from './acl.type';

describe('acl: service', () => {
  const ADMIN = 'admin';
  const USER = 'user';
  const ABILITY = 'order-cancel';
  const ABILITY_CREATE = 'order-create';
  const ABILITY_NUMBER = 1;

  let srv: ACLService = null;

  beforeEach(() => {
    srv = new ACLService();
    srv.set({ role: [ADMIN] } as ACLType);
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
      ability: ['NEWABILITY'],
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
    srv.attachAbility([ADMIN, 'INVALID']);
    expect(srv.can(ADMIN)).toBe(true);
    expect(srv.canAbility('INVALID')).toBe(true);
    expect(srv.canAbility('NEWABILITY')).toBe(false);
    srv.attachAbility(['NEWABILITY', ADMIN, 'INVALID']);
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
    expect(srv.can({ role: [ADMIN] } as ACLType)).toBe(
      true,
      'ACLType item muse be true',
    );
    expect(srv.can(ADMIN + '1')).toBe(false);
    expect(srv.can(null)).toBe(true);
    expect(srv.can({})).toBe(false);
  });

  it('should be valid when all of for is array roles', () => {
    srv.add({ role: [ADMIN, USER] });
    expect(srv.can({ role: [ADMIN, USER], mode: 'allOf' })).toBe(true);
  });

  it('should be invalid when all of for is array roles', () => {
    srv.add({ role: [ADMIN] });
    expect(srv.can({ role: [ADMIN, USER], mode: 'allOf' })).toBe(false);
  });

  it(`#canAbility()`, () => {
    srv.attachAbility([ABILITY]);
    expect(srv.canAbility(ABILITY)).toBe(true, 'should be support number or string type');
    expect(srv.canAbility([ABILITY])).toBe(true, 'should be support array type');
    expect(srv.canAbility(ADMIN + '1')).toBe(false, 'should be invalid ability');
  });

  it('should be valid when all of for is array roles', () => {
    srv.add({ ability: [ABILITY, ABILITY_CREATE] });
    expect(
      srv.canAbility({ ability: [ABILITY, ABILITY_CREATE], mode: 'allOf' }),
    ).toBe(true);
  });

  it('should be invalid when all of for is array roles', () => {
    srv.add({ ability: [ABILITY] });
    expect(
      srv.canAbility({ ability: [ABILITY, ABILITY_CREATE], mode: 'allOf' }),
    ).toBe(false);
  });

  it('#change', (done: () => void) => {
    srv.change.subscribe((res: ACLType) => {
      expect(res.role.length).toBe(1);
      expect(res.role[0]).toBe(ADMIN);
      done();
    });
  });
});
