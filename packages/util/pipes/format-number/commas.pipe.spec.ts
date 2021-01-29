import { CommasNumberPipe } from './commas.pipe';

describe('Pipe: commasNumber', () => {
  const pipe = new CommasNumberPipe();
  it('should working', () => {
    expect(pipe.transform(10000)).toBe('10,000');
  });
  it('should be thousands separators', () => {
    expect(pipe.transform(10000, '-')).toBe('10-000');
  });
});
