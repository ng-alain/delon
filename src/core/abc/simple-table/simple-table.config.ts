import { Injectable } from '@angular/core';

@Injectable()
export class SimpleTableConfig {
    /**
     * 起始页码，默认为：`1`
     */
    pi?: number;
    /**
     * 每页数量，当设置为 `0` 表示不分页，默认：`10`
     */
    ps?: number;
    /**
     * 是否显示边框
     */
    bordered?: boolean;
    /**
     * table大小
     */
    size?: 'small' | 'middle' | 'default';
    /**
     * 是否显示pagination中改变页数
     */
    showSizeChanger?: boolean;
    /**
     * pagination中每页显示条目数下拉框值
     */
    pageSizeSelectorValues?: number[];
    /**
     * 是否显示pagination中快速跳转
     */
    showQuickJumper?: boolean;
    /**
     * 是否显示总数据量
     */
    showTotal?: boolean;
    /**
     * 数据变更后是否保留在数据变更前的页码
     */
    isPageIndexReset?: boolean;
    /**
     * 分页方向
     */
    pagePlacement?: 'left' | 'center' | 'right';
    /**
     * 切换分页时返回顶部
     */
    toTopInChange?: boolean;
    /**
     * 返回顶部偏移值
     */
    toTopOffset?: number;
    /**
     * 重命名请求参数 `pi`、`ps`，例如：`{ pi: 'Page' }` `pi` 会被替换成 Page
     */
    reqReName?: Object;
    /**
     * 重命名返回参数 `total`、`list`，例如：`{ total: 'Total' }` Total 会被当作 `total`
     */
    resReName?: { total?: string | string[], list?: string | string[] };
    /**
     * 重命名排序值，`columns` 的重命名高于属性
     */
    sortReName?: { ascend?: string, descend?: string };
    /**
     * 指定模态框目标组件的接收参数名，默认：`record`
     */
    modalParamsName?: string;
}
