import { isEmpty } from './check';

describe('#isEmpty', () => {
  it('should be empty when only spaces', () => {
    const mockEl: any = {
      childNodes: {
        length: 1,
        item: () => {
          return {
            nodeType: 3,
            textContent: ' ',
          };
        },
      },
    };
    expect(isEmpty(mockEl)).toBe(true);
  });
  it('should not empty when has text', () => {
    const mockEl: any = {
      childNodes: {
        length: 1,
        item: () => {
          return {
            nodeType: 3,
            textContent: '1 ',
          };
        },
      },
    };
    expect(isEmpty(mockEl)).toBe(false);
  });
});
