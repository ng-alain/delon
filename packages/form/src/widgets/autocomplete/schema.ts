import { NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { Observable } from 'rxjs';
import { SFSchemaEnum, SFSchemaEnumType } from '../../schema';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFAutoCompleteWidgetSchema extends SFUISchemaItem {
  /**
   * 异步静态数据源
   */
  asyncData?: (input: string) => Observable<SFSchemaEnumType[]>;

  /**
   * 在文字框中显示提示讯息
   */
  placeholder?: string;

  /**
   * 是否根据输入项进行筛选，默认只对 `label` 属性执行不区分大小定 `indexOf` 过滤
   * 当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。
   */
  filterOption?: boolean | ((input: string, option: SFSchemaEnum) => boolean);

  /**
   * 模式，自动完成常见邮箱后缀，可以重新使用 `enum` 来指定新后缀
   */
  type?: 'email';

  /**
   * 去抖时间，当实时数据源时默认最少 `50`，单位：毫秒
   */
  debounceTime?: number;

  /**
   * 是否默认高亮第一个选项，默认：`true`
   */
  defaultActiveFirstOption?: boolean;

  /**
   * 使用键盘选择选项的时候把选中项回填到输入框中，默认：`false`
   */
  backfill?: boolean;

  /**
   * 自定义宽度单位 `px`，默认：触发元素宽度
   */
  nzWidth?: number;

  /**
   * 变更回调
   */
  change?: (item: NzAutocompleteOptionComponent) => void;
}
