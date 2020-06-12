import { environment } from 'ng-zorro-antd/core/environments';
import { warn, warnDeprecation } from './logger';

describe('util.logger', () => {
  beforeEach(() => spyOn(console, 'warn'));
  it('should be once warn when same content', () => {
    warn('once');
    warn('once');
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
  it('should be disabled warnDeprecation in prod env', () => {
    spyOnProperty(environment, 'isTestMode', 'get').and.returnValue(false);
    warnDeprecation('1');
    expect(console.warn).not.toHaveBeenCalled();
  });
});
