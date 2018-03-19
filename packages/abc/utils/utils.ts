import * as parse from 'date-fns/parse';
import * as addWeeks from 'date-fns/add_weeks';
import * as startOfMonth from 'date-fns/start_of_month';
import * as endOfMonth from 'date-fns/end_of_month';
import * as subMonths from 'date-fns/sub_months';
import * as startOfYear from 'date-fns/start_of_year';
import * as endOfYear from 'date-fns/end_of_year';
import * as subYears from 'date-fns/sub_years';
import * as addDays from 'date-fns/add_days';

/**
 * 转化成RMB元字符串
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
export function yuan(value: any, digits: number = 2): string {
    if (typeof value === 'number')
        value = value.toFixed(digits);
    return `&yen ${value}`;
}

/**
 * 不满两位数自动填充 `0`
 * @param val 数值
 */
export function fixedZero(val) {
    return val * 1 < 10 ? `0${val}` : val;
}

/**
 * 获取时间范围
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 */
export function getTimeDistance(
    type: 'today' | '-today' | 'week' | '-week' | 'month' | '-month' | 'year' | '-year' | number,
    time?: Date | string | number
): [ Date, Date ] {
    time = parse(time || new Date);

    switch (type) {
        case 'today':
        case '-today':
            return [time, time];
        case '-week':
            return [addWeeks(time, -1), time];
        case 'week':
            return [time, addWeeks(time, 1)];
        case 'month':
            return [startOfMonth(time), endOfMonth(time)];
        case '-month':
            return [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
        case 'year':
            return [startOfYear(time), endOfYear(time)];
        case '-year':
            return [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
        default:
            return type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
    }
}

/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param obj 数据源，无效时直接返回 `defaultValue` 值
 * @param path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param defaultValue 默认值
 */
export function deepGet(obj: any, path: string[], defaultValue?: any) {
    if (!obj || path == null || path.length === 0) return defaultValue;
    if (path.length === 1) {
        const checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    return path.reduce((o, k) => o[k], obj) || defaultValue;
}

export function deepCopy(obj: any) {
    // BAD: a temporary solution
    return JSON.parse(JSON.stringify(obj));
}

/** 复制内容至剪贴板 */
export function copy(value: string): Promise<string> {
    return new Promise<string>((resolve, reject): void => {
        let copyTextArea = null as HTMLTextAreaElement;
        try {
            copyTextArea = document.createElement('textarea');
            copyTextArea.style.height = '0px';
            copyTextArea.style.opacity = '0';
            copyTextArea.style.width = '0px';
            document.body.appendChild(copyTextArea);
            copyTextArea.value = value;
            copyTextArea.select();
            document.execCommand('copy');
            resolve(value);
        } finally {
            if (copyTextArea && copyTextArea.parentNode) {
                copyTextArea.parentNode.removeChild(copyTextArea);
            }
        }
      }
    );
}
