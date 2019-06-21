import { CascaderOption } from 'ng-zorro-antd/cascader';
import { SFUISchemaItem } from '../../schema/ui';
import { CascaderWidget } from './cascader.widget';

export interface SFCascaderWidgetSchema extends SFUISchemaItem {
  /**
   * 异步静态数据源
   */
  asyncData?: (node: CascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>;
  /**
   * 在文字框中显示提示讯息
   */
  placeholder?: string;

  /**
   * 是否支持搜索，默认：`false`
   */
  showSearch?: boolean;

  /**
   * 是否显示清除按钮，默认：`true`
   */
  allowClear?: boolean;

  /**
   * 清除按钮的标题，默认：`清除`
   */
  clearText?: string;

  /**
   * 是否显示箭头，默认：`true`
   */
  showArrow?: boolean;

  /**
   * 自定义浮层类名
   */
  menuClassName?: string;

  /**
   * 自定义浮层样式
   */
  menuStyle?: string;

  /**
   * 弹出菜单中数据列的自定义样式
   */
  columnClassName?: string;

  /**
   * 是否缓存异步加载的数据，若每次异步加载的数据都是变化的，需将该值设置为 `false`，默认：`true`
   */
  enableCache?: boolean;

  /**
   * 次级菜单的展开方式，默认：`click`
   */
  expandTrigger?: 'click' | 'hover';

  /**
   * 当此项为 `true` 时，点选每级菜单选项值都会发生变化，具体见上面的演示，默认：`false`
   */
  changeOnSelect?: boolean;

  /**
   * 可通过自定义的函数来判断点击菜单选项是否应该发生变化，当函数返回 `true` 时，将发生变化
   */
  changeOn?: (option: CascaderOption, level: number) => boolean;

  triggerAction?: Array<'click' | 'hover'>;

  // `[triggerAction]` | 触发菜单出现的行为 | `('click', 'hover')[]` | `['click']`
  // `[valueProperty]` | 值 `value` 的属性名称 | `string` | `value`
  // `[labelProperty]` | 值 `label` 的属性名称 | `string` | `label`
  // `[visibleChange]` | 异步加载事件 | `(value: boolean) => void` | -
  // `[change]` | 选项值变更事件 | `(values: any[]) => void` | -
  // `[selectionChange]` | 选项变更事件 | `(values: CascaderOption[]) => void` | -
  // `[select]` | 选项被选中事件 | `(values: { option: CascaderOption, index: number }) => void` | -
  // `[clear]` | 内容被清空事件 | `() => void` | -
}
