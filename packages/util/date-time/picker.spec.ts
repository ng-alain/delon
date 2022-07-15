import { addDays, addSeconds } from 'date-fns';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { DisabledTimeConfig } from 'ng-zorro-antd/date-picker';

import { dateTimePickerUtil } from './picker';

const NOW = new Date(2000, 1, 1, 0, 0, 0, 0);

describe('util: date-time', () => {
  let mockNOW = NOW;
  describe('#dateTimePickerUtil', () => {
    beforeEach(() => {
      mockNOW = NOW;
      spyOnProperty(dateTimePickerUtil, 'now').and.callFake(() => mockNOW);
    });
    it('#now', () => {
      expect(dateTimePickerUtil.now instanceof Date).toBe(true);
    });
    it('#removeTime', () => {
      expect(dateTimePickerUtil.removeTime(addSeconds(NOW, 1)).getSeconds()).toBe(0);
    });
    it('#format', () => {
      expect(dateTimePickerUtil.format(NOW)).toBe('2000-02-01 00:00:00');
      expect(dateTimePickerUtil.format(NOW, 'yyyy')).toBe('2000');
    });
    it('#disabledBeforeDate', () => {
      expect(dateTimePickerUtil.disabledBeforeDate()(NOW)).withContext(`Shoule be not include today`).toBe(false);
      expect(dateTimePickerUtil.disabledBeforeDate({ offsetDays: 1 })(NOW))
        .withContext(`Shoule be not today, because of offset`)
        .toBe(true);
    });
    it('#disabledAfterDate', () => {
      expect(dateTimePickerUtil.disabledAfterDate()(NOW)).withContext(`Shoule be not include today`).toBe(false);
      expect(dateTimePickerUtil.disabledAfterDate({ offsetDays: -1 })(NOW))
        .withContext(`Shoule be not today, because of offset`)
        .toBe(true);
    });
    describe('disabled time', () => {
      function checkRes(
        res: DisabledTimeConfig,
        hourseLength: number,
        minutesLength: number,
        secondsLength: number
      ): void {
        expect(res?.nzDisabledHours().length).toBe(hourseLength);
        expect(res?.nzDisabledMinutes(NOW.getHours()).length).toBe(minutesLength);
        expect(res?.nzDisabledSeconds(NOW.getHours(), NOW.getMinutes()).length).toBe(secondsLength);
      }
      it('when is invalid date', () => {
        const res = dateTimePickerUtil.disabledBeforeTime()(null as NzSafeAny);
        expect(res?.nzDisabledHours).toBeUndefined();
        expect(res?.nzDisabledMinutes).toBeUndefined();
        expect(res?.nzDisabledSeconds).toBeUndefined();
      });
      describe('#disabledBeforeTime', () => {
        it('should be working', () => {
          mockNOW = addSeconds(NOW, 10);
          const res = dateTimePickerUtil.disabledBeforeTime()(NOW);
          checkRes(res!, 0, 0, 10);
        });
        it('should be offset second', () => {
          const res = dateTimePickerUtil.disabledBeforeTime({ offsetSeconds: 10 })(NOW);
          checkRes(res!, 0, 0, 10);
        });
        it('should be not today', () => {
          mockNOW = addDays(NOW, 1);
          const res = dateTimePickerUtil.disabledBeforeTime()(NOW);
          checkRes(res!, 0, 0, 0);
        });
      });
      describe('#disabledAfterTime', () => {
        it('should be working', () => {
          mockNOW = addSeconds(NOW, 10);
          const res = dateTimePickerUtil.disabledAfterTime()(NOW);
          checkRes(res!, 23, 59, 49);
        });
        it('should be offset second', () => {
          const res = dateTimePickerUtil.disabledAfterTime({ offsetSeconds: 5 })(NOW);
          checkRes(res!, 23, 59, 54);
        });
        it('should be not today', () => {
          mockNOW = addDays(NOW, 1);
          const res = dateTimePickerUtil.disabledAfterTime()(NOW);
          checkRes(res!, 0, 0, 0);
        });
      });
    });
  });
});
