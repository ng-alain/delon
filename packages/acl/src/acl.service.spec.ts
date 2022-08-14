/* eslint-disable @typescript-eslint/no-explicit-any */
import { ACLService } from './acl.service';
import { ACLType } from './acl.type';

describe('acl: service', () => {
  const ADMIN = 'admin';
  const USER = 'user';
  const ABILITY = 'order-cancel';
  const ABILITY_CREATE = 'order-create';
  const ABILITY_NUMBER = 1;

  let srv: ACLService;

  beforeEach(() => {
    srv = new ACLService({ merge: (_: any, def: any) => def } as any);
    srv.set({ role: [ADMIN] } as ACLType);
  });

  it(`#set()`, () => {
    expect(srv.can(ADMIN)).toBe(true);
    expect(srv.can(USER)).toBe(false);
  });

  it('should be cancel full when call set', () => {
    srv.setFull(true);
    expect(srv.can(ADMIN)).toBe(true);
    srv.set([USER]);
    expect(srv.can(ADMIN)).toBe(false);
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
    expect(srv.canAbility(`${ABILITY}1`)).toBe(false);
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

  describe('#can()', () => {
    it('should working', () => {
      srv.attachAbility([ABILITY_NUMBER]);
      expect(srv.can(ADMIN)).withContext(`can ${ADMIN}`).toBe(true);
      expect(srv.can(ABILITY_NUMBER)).withContext('ability muse be true').toBe(true);
      expect(srv.can([ABILITY_NUMBER]))
        .withContext('ability array muse be true')
        .toBe(true);
      expect(srv.can([ADMIN]))
        .withContext('role array muse be true')
        .toBe(true);
      expect(srv.can({ role: [ADMIN] } as ACLType))
        .withContext('ACLType item muse be true')
        .toBe(true);
      expect(srv.can(`${ADMIN}1`)).toBe(false);
      expect(srv.can(null)).toBe(true);
      expect(srv.can({})).toBe(false);
    });
    it('should be allow ability is string in can method by preCan', () => {
      const preCanSpy = jasmine.createSpy();
      srv = new ACLService({ merge: () => ({ preCan: preCanSpy }) } as any);
      srv.attachAbility([ABILITY_CREATE]);
      srv.can(ABILITY_CREATE);
      expect(preCanSpy).toHaveBeenCalled();
    });
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
    expect(srv.canAbility(ABILITY)).withContext('should be support number or string type').toBe(true);
    expect(srv.canAbility([ABILITY]))
      .withContext('should be support array type')
      .toBe(true);
    expect(srv.canAbility(`${ADMIN}1`))
      .withContext('should be invalid ability')
      .toBe(false);
  });

  it('should be valid when all of for is array roles', () => {
    srv.add({ ability: [ABILITY, ABILITY_CREATE] });
    expect(srv.canAbility({ ability: [ABILITY, ABILITY_CREATE], mode: 'allOf' })).toBe(true);
  });

  it('should be invalid when all of for is array roles', () => {
    srv.add({ ability: [ABILITY] });
    expect(srv.canAbility({ ability: [ABILITY, ABILITY_CREATE], mode: 'allOf' })).toBe(false);
  });

  it('#change', done => {
    srv.change.subscribe(res => {
      res = res as ACLType;
      expect(res.role!.length).toBe(1);
      expect(res.role![0]).toBe(ADMIN);
      done();
    });
  });

  describe('#except', () => {
    it('should be true is false', () => {
      srv.attachRole([ADMIN]);
      expect(srv.can({ role: [ADMIN], except: true })).toBe(false);
    });
    it('should be false is true', () => {
      srv.attachRole([ADMIN]);
      expect(srv.can({ role: [ADMIN + ADMIN], except: true })).toBe(true);
    });
    it('should be false when is full roles', () => {
      srv.setFull(true);
      expect(srv.can({ role: [ADMIN], except: true })).toBe(false);
    });
    it('should be true when arguments is null', () => {
      expect(srv.can(null)).toBe(true);
    });
  });
});
