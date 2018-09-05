export interface NoticeItem {
  title: string;
  list: NoticeIconList[];
  /** 空列表文本，默认：`无通知` */
  emptyText?: string;
  /** 空列表图像 */
  emptyImage?: string;
  /** 清空文本，默认：`清空` */
  clearText?: string;
}

export interface NoticeIconList {
  [key: string]: any;

  /** 头像图片链接 */
  avatar?: string;

  /** 标题 */
  title?: string;

  /** 描述信息 */
  description?: string;

  /** 时间戳 */
  datetime?: string;

  /** 额外信息，在列表项右上角 */
  extra?: string;

  /** 是否已读状态 */
  read?: boolean;
}

export interface NoticeIconSelect {
  title: string;
  item: NoticeItem;
}
