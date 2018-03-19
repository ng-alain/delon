/** 一套日常验证类 */
export class Validate {
    /** 是否为数字 */
    static isNum(value: string | number): boolean {
        return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
    }

    /** 是否为整数 */
    static isInt(value: string | number): boolean {
        // tslint:disable-next-line:triple-equals
        return Validate.isNum(value) && parseInt(value.toString(), 10) == value;
    }

    /** 是否为小数 */
    static isDecimal(value: string | number): boolean {
        return Validate.isNum(value) && !Validate.isInt(value);
    }

    /** 是否为身份证 */
    static isIdCard(value: any): boolean {
        return typeof(value) === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
    }

    /** 是否为手机号 */
    static isMobile(value: any): boolean {
        return typeof(value) === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
    }
}
