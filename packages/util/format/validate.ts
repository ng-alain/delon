export const REGEX = {
  num: /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/,
  idCard: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i,
  mobile: /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/,
  url: /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,
  ip4: /(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}/,
};

/**
 * Wheter is number
 *
 * 是否为数字
 */
export function isNum(value: string | number): boolean {
  return REGEX.num.test(value.toString());
}

/**
 * Wheter is integer
 *
 * 是否为整数
 */
export function isInt(value: string | number): boolean {
  return isNum(value) && parseInt(value.toString(), 10).toString() === value.toString();
}

/**
 * Wheter is decimal
 *
 * 是否为小数点数值
 */
export function isDecimal(value: string | number): boolean {
  return isNum(value) && !isInt(value);
}

/**
 * Wheter is People's Republic of China identity card
 *
 * 是否为中华人民共和国居民身份证
 */
export function isIdCard(value: string): boolean {
  return typeof value === 'string' && REGEX.idCard.test(value);
}

/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 */
export function isMobile(value: string): boolean {
  return typeof value === 'string' && REGEX.mobile.test(value);
}

/**
 * Wheter is url address
 *
 * 是否URL地址
 */
export function isUrl(url: string): boolean {
  return REGEX.url.test(url);
}

/**
 * Wheter is IPv4 address
 *
 * 是否IP4地址
 */
export function isIp4(ip: string): boolean {
  return REGEX.ip4.test(ip);
}
