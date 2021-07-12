import { Observable, Subscription } from 'rxjs';

import {
  NzShowUploadList,
  NzUploadChangeParam,
  NzUploadFile,
  NzUploadTransformFileType,
  NzUploadXHRArgs,
  UploadFilter
} from 'ng-zorro-antd/upload';

import { SFSchemaEnumType } from '../../schema';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFUploadWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  /**
   * 上传类型，默认：`select`
   */
  type?: 'select' | 'drag';

  /**
   * 按钮文本，默认：`点击上传`
   */
  text?: string;

  /**
   * 提醒文本，drag 时有效，默认：`支持单个或批量，严禁上传公司数据或其他安全文件`
   */
  hint?: string;

  /**
   * 重命名返回参数，支持 `a.b.c` 的嵌套写法，若不指定表示整个返回体
   */
  resReName?: string;

  /**
   * 重命名预览图像URL返回参数，支持 `a.b.c` 的嵌套写法，若不指定表示使用文件对象的 `url`、`thumbUrl` 值
   */
  urlReName?: string;

  /**
   * **必选参数** 上传的地址
   */
  action?: string | ((file: NzUploadFile) => string | Observable<string>);

  /**
   * 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)
   */
  accept?: string | string[];

  /**
   * 限制单次最多上传数量，`multiple` 打开时有效；`0` 表示不限，默认：`0`
   */
  limit?: number;

  /**
   * 限制上传文件数量，超过数量隐藏上传按钮
   */
  limitFileCount?: number;

  /**
   * 自定义过滤器
   */
  filter?: UploadFilter[];

  /**
   * 文件列表
   */
  fileList?: NzUploadFile[];

  /**
   * 限制文件大小，单位：KB；`0` 表示不限，默认：`0`
   */
  fileSize?: number;

  /**
   * 限制文件类型，例如：`image/png,image/jpeg,image/gif,image/bmp`
   */
  fileType?: string;

  /**
   * 设置上传的请求头部
   */
  headers?: {} | ((file: NzUploadFile) => {} | Observable<{}>);

  /**
   * 上传列表的内建样式，默认：`text`
   */
  listType?: 'text' | 'picture' | 'picture-card';

  /**
   * 是否展示列表, 可设为一个对象，用于单独设定 `showPreviewIcon` 和 `showRemoveIcon`，默认：`true`
   */
  showUploadList?: boolean | NzShowUploadList;

  /**
   * 是否支持多选文件，`IE10+` 支持。开启后按住 `ctrl` 可选择多个文件，默认：`false`
   */
  multiple?: boolean;

  /**
   * 发到后台的文件参数名，默认：`file`
   */
  name?: string;

  /**
   * 上传所需参数或返回上传参数的方法
   */
  data?: {} | ((file: NzUploadFile) => {} | Observable<{}>);

  /**
   * 上传请求时是否携带 cookie，默认：`false`
   */
  withCredentials?: boolean;

  /**
   * 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)），默认：`false`
   */
  directory?: boolean;

  /**
   * 点击打开文件对话框，默认：`true`
   */
  openFileDialogOnClick?: boolean;

  /**
   * 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传
   */
  beforeUpload?: (file: NzUploadFile, fileList: NzUploadFile[]) => boolean | Observable<boolean>;

  /**
   * 通过覆盖默认的上传行为，可以自定义自己的上传实现
   */
  customRequest?: (item: NzUploadXHRArgs) => Subscription;

  /**
   * 点击移除文件时的回调，返回值为 `false` 时不移除
   */
  remove?: (file: NzUploadFile) => boolean | Observable<boolean>;

  /**
   * 点击文件链接或预览图标时的回调
   */
  preview?: (file: NzUploadFile) => void;

  /**
   * 自定义文件预览逻辑
   */
  previewFile?: (file: NzUploadFile) => Observable<string>;

  /**
   * 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页
   */
  download?: (file: NzUploadFile) => void;

  /**
   * 在上传之前转换文件。支持返回一个 Observable 对象
   */
  transformFile?: (file: NzUploadFile) => NzUploadTransformFileType;

  /**
   * 上传文件改变时的状态
   */
  change?: (args: NzUploadChangeParam) => void;
}
