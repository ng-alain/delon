import { warn } from './logger';

describe('util.logger', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockReturnValue(undefined);
  });
  it('should be once warn when same content', () => {
    warn('once');
    warn('once');
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
});
