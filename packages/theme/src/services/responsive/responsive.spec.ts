import { ResponsiveService } from './responsive';

describe('theme: responsive', () => {
  let srv: ResponsiveService;

  it('should be throw error when invalid range', () => {
    expect(() => {
      srv = new ResponsiveService({
        responsive: {
          rules: {
            10: {},
          },
        },
      });
    }).toThrow();
  });

  describe('#genCls', () => {
    beforeEach(() => (srv = new ResponsiveService({})));
    it('rule 1', () => {
      const res = srv.genCls(1);
      expect(res.length).toBe(1);
      expect(res[0]).toBe(`ant-col-xs-24`);
    });
    it('rule 2', () => {
      const res = srv.genCls(2);
      expect(res.length).toBe(2);
      expect(res[0]).toBe(`ant-col-xs-24`);
      expect(res[1]).toBe(`ant-col-sm-12`);
    });
    it('rule 3', () => {
      const res = srv.genCls(3);
      expect(res.length).toBe(3);
      expect(res[0]).toBe(`ant-col-xs-24`);
      expect(res[1]).toBe(`ant-col-sm-12`);
      expect(res[2]).toBe(`ant-col-md-8`);
    });
    it('rule 4', () => {
      const res = srv.genCls(4);
      expect(res.length).toBe(4);
      expect(res[0]).toBe(`ant-col-xs-24`);
      expect(res[1]).toBe(`ant-col-sm-12`);
      expect(res[2]).toBe(`ant-col-md-8`);
      expect(res[3]).toBe(`ant-col-lg-6`);
    });
    it('rule 5', () => {
      const res = srv.genCls(5);
      expect(res.length).toBe(5);
      expect(res[0]).toBe(`ant-col-xs-24`);
      expect(res[1]).toBe(`ant-col-sm-12`);
      expect(res[2]).toBe(`ant-col-md-8`);
      expect(res[3]).toBe(`ant-col-lg-6`);
      expect(res[4]).toBe(`ant-col-xl-4`);
    });
    it('rule 6', () => {
      const res = srv.genCls(6);
      expect(res.length).toBe(6);
      expect(res[0]).toBe(`ant-col-xs-24`);
      expect(res[1]).toBe(`ant-col-sm-12`);
      expect(res[2]).toBe(`ant-col-md-8`);
      expect(res[3]).toBe(`ant-col-lg-6`);
      expect(res[4]).toBe(`ant-col-xl-4`);
      expect(res[5]).toBe(`ant-col-xxl-2`);
    });
    it('should be use rule 6 when maximum', () => {
      const res = srv.genCls(16);
      expect(res.length).toBe(6);
      expect(res[0]).toBe(`ant-col-xs-24`);
      expect(res[1]).toBe(`ant-col-sm-12`);
      expect(res[2]).toBe(`ant-col-md-8`);
      expect(res[3]).toBe(`ant-col-lg-6`);
      expect(res[4]).toBe(`ant-col-xl-4`);
      expect(res[5]).toBe(`ant-col-xxl-2`);
    });
    it('should be use rule 1 when minimum', () => {
      const res = srv.genCls(0);
      expect(res.length).toBe(1);
      expect(res[0]).toBe(`ant-col-xs-24`);
    });
  });
});
