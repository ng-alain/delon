/**
 * Wheter is number
 *
 * 是否为数字
 */
export function isNum(value: string | number): boolean {
  return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
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
  return typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value);
}

/**
 * Wheter is china mobile (China)
 *
 * 是否为手机号（中国）
 */
export function isMobile(value: string): boolean {
  return typeof value === 'string' && /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
}

/**
 * Wheter is url address
 *
 * 是否URL地址
 */
export function isUrl(url: string): boolean {
  return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(
    url,
  );
}
