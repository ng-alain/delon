import { AbstractControl, ValidationErrors } from '@angular/forms';
import { isDecimal, isIdCard, isInt, isIp4, isMobile, isNum, isUrl } from '@delon/util/format';

/**
 * A set of validators for reactive forms
 *
 * 一套用于响应式表单的验证器
 */
// tslint:disable-next-line:class-name
export class _Validators {
  /**
   * Wheter is number
   *
   * 是否为数字
   */
  static num(control: AbstractControl): ValidationErrors | null {
    return isNum(control.value) ? null : { num: true };
  }

  /**
   * Wheter is integer
   *
   * 是否为整数
   */
  static int(control: AbstractControl): ValidationErrors | null {
    return isInt(control.value) ? null : { int: true };
  }

  /**
   * Wheter is decimal
   *
   * 是否为小数点数值
   */
  static decimal(control: AbstractControl): ValidationErrors | null {
    return isDecimal(control.value) ? null : { decimal: true };
  }

  /**
   * Wheter is People's Republic of China identity card
   *
   * 是否为中华人民共和国居民身份证
   */
  static idCard(control: AbstractControl): ValidationErrors | null {
    return isIdCard(control.value) ? null : { idCard: true };
  }

  /**
   * Wheter is china mobile (China)
   *
   * 是否为手机号（中国）
   */
  static mobile(control: AbstractControl): ValidationErrors | null {
    return isMobile(control.value) ? null : { mobile: true };
  }

  /**
   * Wheter is url address
   *
   * 是否URL地址
   */
  static url(control: AbstractControl): ValidationErrors | null {
    return isUrl(control.value) ? null : { url: true };
  }

  /**
   * Wheter is IPv4 address
   *
   * 是否IP4地址
   */
  static ip4(control: AbstractControl): ValidationErrors | null {
    return isIp4(control.value) ? null : { ip4: true };
  }
}
