import * as moment from 'moment';

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
export function getTimeDistance(type: 'today' | '-today' | 'week' | '-week' | 'month' | '-month' | 'year' | '-year' | number, time?: moment.MomentInput) {
    if (!time) time = moment(new Date());
    if (!moment.isMoment(time)) time = moment(time);

    switch (type) {
        case 'today':
        case '-today':
            return [moment(time), moment(time)];
        case '-week':
            return [moment(time).add(-1, 'week'), moment(time)];
        case 'week':
            return [moment(time), moment(time).add(1, 'week')];
        case 'month':
            return [moment(time).startOf('month'), moment(time).endOf('month')];
        case '-month':
            return [moment(time).subtract(1, 'month').startOf('month'), moment(time).subtract(1, 'month').endOf('month')];
        case 'year':
            return [moment(time).startOf('year'), moment(time).endOf('year')];
        case '-year':
            return [moment(time).subtract(1, 'year').startOf('year'), moment(time).subtract(1, 'year').endOf('year')];
        default:
            return type > 0 ? [moment(time), moment(time).add(type, 'days')] : [moment(time).add(type, 'days'), moment(time)];
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
