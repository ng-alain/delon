import { MegaNumberPipe } from './mega.pipe';

describe('Pipe: megaNumber', () => {
  const pipe = new MegaNumberPipe('en-US');
  const pipeCN = new MegaNumberPipe('zh');
  it('should working', () => {
    expect(pipe.transform(10000)).toBe('10K');
    expect(pipeCN.transform(10000)).toBe('10千');
  });
  it('should be precision', () => {
    expect(pipe.transform(10100, 1)).toBe('10.1K');
  });
});
