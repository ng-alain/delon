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
 * @param type 类型
 * @param time 开始时间
 */
export function getTimeDistance(type: 'today' | 'week' | 'month' | 'year', time: Date = new Date()) {
    const oneDay = 1000 * 60 * 60 * 24;

    if (type === 'today') {
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);
        return [moment(time), moment(time.getTime() + (oneDay - 1000))];
    }

    if (type === 'week') {
        let day = time.getDay();
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);

        if (day === 0) {
            day = 6;
        } else {
            day -= 1;
        }

        const beginTime = time.getTime() - day * oneDay;

        return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
    }

    if (type === 'month') {
        const year = time.getFullYear();
        const month = time.getMonth();
        const nextDate = moment(time).add(1, 'months');
        const nextYear = nextDate.year();
        const nextMonth = nextDate.month();

        return [
            moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
            moment(
                moment(
                    `${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`
                ).valueOf() - 1000
            )
        ];
    }

    if (type === 'year') {
        const year = time.getFullYear();

        return [
            moment(`${year}-01-01 00:00:00`),
            moment(`${year}-12-31 23:59:59`)
        ];
    }
}

/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-get
 */
export function deepGet(obj: any, path: string[], defaultValue: any) {
    if (!obj) return defaultValue;
    if (path.length <= 1) {
        const checkObj = path.length ? obj[path[0]] : obj;
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    return path.reduce((o, k) => (o || {})[k], obj) || defaultValue;
}

export function deepCopy(obj: any) {
    // BAD: a temporary solution
    return JSON.parse(JSON.stringify(obj));
}
