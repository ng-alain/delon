import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface CLodop {
  /**
   * 判断是否支持https协议的属性
   *
   * - 0 不支持
   * - 1 支持
   * - 2 支持且已启动（https服务需单独启动)
   */
  readonly HTTPS_STATUS: number;

  /** 结果回调函数保留 */
  On_Return_Remain: boolean;

  /** 结果回调函数 */
  On_Return: ((taskID: string, value: boolean | string) => void) | null;

  /** 建立打印机名单 */
  Create_Printer_List(el: Element): void;

  /** 建立纸张类型名单 */
  Create_PageSize_List(el: Element, iPrintIndex: number): void;
}

export interface Lodop extends CLodop {
  [key: string]: NzSafeAny;

  /** 获得软件版本号 */
  VERSION: string;

  /**
   * 打印初始化。初始化运行环境，清理异常打印遗留的系统资源，设定打印任务名。
   *
   * **建议或要求：**该函数与PRINT_INITA都有初始化功能，每个打印事务至少初始化一次，建议打印程序首先调用该函数。任务名要尽量区别于其它打印任务，譬如用“XX单位_XX管理信息系统_XX子系统_XX模块_XX打印作业”字样。
   * 不希望最终用户更改打印布局时，则设strTaskName空。
   *
   * @param strTaskName 打印任务名
   * @returns 返回逻辑真表示初始化成功，逻辑假表示初始化失败，失败原因有：前一个打印事务没有完成；操作系统没有添加打印机(驱动)等
   */
  PRINT_INIT(strTaskName: string): boolean;

  /** 设定纸张大小 */
  SET_PRINT_PAGESIZE(
    intOrient: number,
    PageWidth: number | string,
    PageHeight: number | string,
    strPageName: string
  ): void;

  /** 增加超文本打印项(普通模式) */
  ADD_PRINT_HTM(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strHtmlContent: string
  ): void;

  /**
   * 增加表格打印项（超文本模式）
   */
  ADD_PRINT_TABLE(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strHtml: string
  ): void;

  /**
   * 增加表格打印项（超文本模式）
   */
  ADD_PRINT_TABLE(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strHtml: string
  ): void;

  /**
   * 增加超文本打印项（URL模式）
   */
  ADD_PRINT_URL(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strURL: string
  ): void;

  /** 增加纯文本打印项 */
  ADD_PRINT_TEXT(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strContent: string
  ): void;

  /** 增加图片打印项 */
  ADD_PRINT_IMAGE(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strHtmlContent: string
  ): void;

  /** 增加矩形线 */
  ADD_PRINT_RECT(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    intLineStyle: number,
    intLineWidth: number
  ): void;

  /** 增加椭圆线 */
  ADD_PRINT_ELLIPSE(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    intLineStyle: number,
    intLineWidth: number
  ): void;

  /** 增加直线 */
  ADD_PRINT_LINE(
    Top1: number | string,
    Left1: number | string,
    Top2: number | string,
    Left2: number | string,
    intLineStyle: number,
    intLineWidth: number
  ): void;

  /** 增加条形码 */
  ADD_PRINT_BARCODE(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    CodeType: string,
    CodeValue: string
  ): void;

  /** 增加图表 */
  ADD_PRINT_CHART(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    ChartType: number,
    strHtml: string
  ): void;

  /** 增加PDF */
  ADD_PRINT_PDF(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strContent: string
  ): void;

  /** 增加PDF */
  ADD_PRINT_PDF(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strContent: string
  ): void;

  /** 装载文档式模板 */
  ADD_PRINT_DATA(strDataStyle: string, varDataValue: NzSafeAny): void;

  /** 设置打印项风格 */
  SET_PRINT_STYLE(strStyleName: LodopStyleValue, varStyleValue: number | string): void;

  /** 打印预览 */
  PREVIEW(): number;

  /** 直接打印 */
  PRINT(): string;

  /** 打印维护 */
  PRINT_SETUP(): string;

  /** 打印设计 */
  PRINT_DESIGN(): string;

  /** 强制分页 */
  NEWPAGE(): boolean;

  /** 获得打印设备个数 */
  GET_PRINTER_COUNT(): number;

  /** 获得打印设备名称 */
  GET_PRINTER_NAME(strPrinterIDandType: number | string): string;

  /** 指定打印设备 */
  SET_PRINTER_INDEX(oIndexOrName: number | string): boolean;
  /** 【CLodop】指定打印机 */
  SET_PRINTER_INDEX(
    DriverIndex: number | string,
    PrinterIDandName: number | string,
    SubDevIndex: number | string
  ): boolean;

  /** 选择打印设备 */
  SELECT_PRINTER(): number;

  /** 设置显示模式 */
  SET_SHOW_MODE(strModeType: string, varModeValue: number | string): boolean;

  /** 设置打印模式 */
  SET_PRINT_MODE(strModeType: string, varModeValue: number | string): boolean | string;

  /** 设置打印份数 */
  SET_PRINT_COPIES(intCopies: number): boolean;

  /** 设置预览窗口 */
  SET_PREVIEW_WINDOW(
    intDispMode: number,
    intToolMode: number,
    blDirectPrint: number,
    inWidth: number,
    intHeight: number,
    strTitleButtonCaptoin: string
  ): void;

  /** 指定背景图 */
  ADD_PRINT_SETUP_BKIMG(strImgHtml: string): void;

  /** 发送原始数据 */
  SEND_PRINT_RAWDATA(strRawData: string): boolean;

  /** 写端口数据 */
  WRITE_PORT_DATA(strPortName: string, strData: string): boolean;

  /** 读端口数据 */
  READ_PORT_DATA(strPortName: string): string;

  /** 获得配置文件名 */
  GET_PRINT_INIFFNAME(strPrintTask: string): string;

  /** 获得纸张类型名清单 */
  GET_PAGESIZES_LIST(oPrinterName: number | string, strSplit: string): string;

  /** 写本地文件内容 */
  WRITE_FILE_TEXT(intWriteMode: number | string, strFileName: string, strText: string): string;

  /** 读本地文件内容 */
  GET_FILE_TEXT(strFileName: string): string | null;

  /** 读本地文件时间 */
  GET_FILE_TIME(strFileName: string): string | null;

  /** 判断本地文件是否存在 */
  IS_FILE_EXIST(strFileName: string): boolean;

  /** 获得系统信息 */
  GET_SYSTEM_INFO(strInfoType: string): boolean;

  /** 获得数据值 */
  GET_VALUE(ValueType: string, ValueIndex: number | string): NzSafeAny;

  /** 数据格式转换 */
  FORMAT(oType: string, oValue: NzSafeAny): NzSafeAny;

  /** 获得对话框结果值 */
  GET_DIALOG_VALUE(oType: string, oPreValue: string): string;

  /** (增强型)打印初始化 */
  PRINT_INITA(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strPrintName: string
  ): boolean;

  /** (增强型)增加超文本打印项(图形模式) */
  ADD_PRINT_HTML(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strHtmlContent: string
  ): void;

  /** (增强型)增加表格打印项（URL模式） */
  ADD_PRINT_TBURL(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strURL: string
  ): void;

  /** (增强型)增加纯文本打印项 */
  ADD_PRINT_TEXTA(
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    strContent: string
  ): void;

  /** (增强型)设置打印项风格A, 继承 `SET_PRINT_STYLE` 的所有属性 */
  SET_PRINT_STYLEA(varItemNameID: number | string, strStyleName: string, varStyleValue: number | string): void;

  /** (增强型)导出数据到文件 */
  SAVE_TO_FILE(strFileName: string): boolean;

  /** (增强型)设置保存模式 */
  SET_SAVE_MODE(varModeName: string, varModeValue: number | string): boolean;

  /** (增强型)增加图形 */
  ADD_PRINT_SHAPE(
    intShapeType: number,
    Top: number | string,
    Left: number | string,
    Width: number | string,
    Height: number | string,
    intLineStyle: number,
    intLineWidth: number,
    varColor: number | string
  ): void;

  /** (增强型)指定打印设备 */
  SET_PRINTER_INDEXA(oIndexOrName: number | string): boolean;

  /** (增强型)强制分页 */
  NEWPAGEA(): boolean;

  /** (增强型)打印预览A */
  PREVIEWA(): number;

  /** (增强型)打印预览B */
  PREVIEWB(): number;

  /** 直接打印A */
  PRINTA(): boolean;

  /** 直接打印B */
  PRINTB(): boolean;

  /** 显示图表 */
  SHOW_CHART(): void;

  /** 控制界面动作 */
  DO_ACTION(ActName: string, ActValue: number | string): void;

  /**
   * 设置软件产品注册信息
   *
   * @param  strCompanyName 注册单位名称，用途与控件参数CompanyName一样。
   * @param  strLicense 主注册号，用途与控件参数License一样。
   * @param  strLicenseA 附加注册号A，用途与控件参数LicenseA一样。
   * @param  strLicenseB 附加注册号B，用途与控件参数LicenseB一样。
   */
  SET_LICENSES(strCompanyName: string, strLicense: string, strLicenseA?: string, strLicenseB?: string): void;

  webskt: WebSocket;
}

export type LodopStyleValue =
  | 'FontName'
  | 'FontSize'
  | 'FontColor'
  | 'Bold'
  | 'Italic'
  | 'Underline'
  | 'Alignment'
  | 'Angle'
  | 'ItemType'
  | 'HOrient'
  | 'VOrient'
  | 'PenWidth'
  | 'PenStyle'
  | 'Stretch'
  | 'PreviewOnly'
  | 'ReadOnly';

export interface LodopResult {
  /** 是否成功 */
  ok: boolean;
  /** 错误码 */
  status?: string;
  /** 成功时携带 LODOP 对象 */
  lodop?: Lodop;
  /** 错误信息 */
  error?: NzSafeAny;
}

export interface LodopPrintResult {
  /** 是否成功 */
  ok: boolean;
  /** 错误信息 */
  error?: string;
  /** 代码 */
  code: string;
  /** 动态参数上下文对象 */
  item: NzSafeAny;
  /** 代码解析表达式 */
  parser?: RegExp;
}
