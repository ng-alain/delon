import { Component, TemplateRef } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { deepCopy, LazyService } from '@delon/abc';
import { EditorItem } from '../interface';

const DEFAULT = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'font-family': { label: '字体', type: 'input', default: `"Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif` },
    // 'font-size-base': { label: '字号', type: 'px', default: '14px', min: 14, max: 30 },
    'icon-url': { label: '图标', type: 'input', default: `"https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i"` },
    'header-hg': { label: '高', type: 'px', default: '64px' },
    'header-bg': { label: '背景色', type: 'color', default: '@primary-color', tip: '同[主颜色]' },
    'header-padding': { label: '顶部左右内边距', type: 'px', default: '16px' },
    // 侧边栏
    'aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'aside-bg': { label: '背景', type: 'color', default: '#ffffff' },
    'aside-collapsed-wd': { label: '收缩宽度', type: 'px', default: '64px' },
    'aside-nav-padding-top-bottom': { label: '项上下内边距', type: 'px', default: '8px', step: 8 },
    // 主菜单
    'aside-nav-fs': { label: '菜单字号', type: 'px', default: '14px', min: 14, max: 30 },
    'aside-collapsed-nav-fs': { label: '收缩菜单字号', type: 'px', default: '24px', min: 24, max: 32 },
    'aside-nav-item-height': { label: '项高度', type: 'px', default: '38px', min: 24, max: 64 },
    'aside-nav-text-color': { label: '文本颜色', type: 'color', default: 'rgba(0, 0, 0, 0.65)', rgba: true },
    'aside-nav-text-hover-color': { label: '文本悬停颜色', type: 'color', default: '@primary-color', tip: '同[主颜色]' },
    'aside-nav-group-text-color': { label: '分组文本颜色', type: 'color', default: 'rgba(0, 0, 0, 0.43)', rgba: true },
    'aside-nav-selected-text-color': { label: '激活时文本颜色', type: 'color', default: '@primary-color', tip: '同[主颜色]' },
    'aside-nav-selected-bg': { label: '激活时背景颜色', type: 'color', default: '#fcfcfc' },
    // 内容
    'content-bg': { label: '背景色', type: 'color', default: '#f5f7fa' },
    'content-heading-bg': { label: '标题背景色', type: 'color', default: '#fafbfc' },
    'content-heading-border': { label: '标题底部边框色', type: 'color', default: '#efe3e5' },
    'content-padding': { label: '内边距', type: 'px', default: '24px', min: 0, max: 128, step: 8 },
    // zorro组件修正
    'form-state-visual-feedback-enabled': { label: '开启表单元素的视觉反馈', type: 'switch', default: false },
    'preserve-white-spaces-enabled': { label: '开启 preserveWhitespaces', type: 'switch', default: true },
    'nz-table-img-radius': { label: '表格中：图片圆角', type: 'px', default: '4px', min: 0, max: 128 },
    'nz-table-img-margin-right': { label: '表格中：图片右外边距', type: 'px', default: '4px', min: 0, max: 128 },
    'nz-table-img-max-width': { label: '表格中：图片最大宽度', type: 'px', default: '32px', min: 8, max: 128 },
    'nz-table-img-max-height': { label: '表格中：图片最大高度', type: 'px', default: '32px', min: 8, max: 128 },
    // 其它
    'scrollbar-width': { label: '滚动条宽度', type: 'px', default: '6px', min: 0, max: 24 },
    'scrollbar-height': { label: '滚动条高度', type: 'px', default: '6px', min: 0, max: 24 },
    'scrollbar-track-color': { label: '滚动条的轨道颜色', type: 'color', default: 'rgba(0, 0, 0, 0.3)', rgba: true },
    'scrollbar-thumb-color': { label: '滚动条小方块颜色', type: 'color', default: '#6e6e6e' },
};

@Component({
    selector: 'theme-editor',
    templateUrl: './editor.component.html',
    styleUrls: [ './editor.component.less' ]
})
export class ThemeEditorComponent {
    data: any = {};
    code: string;
    parse: string;

    constructor(
        private modalSrv: NzModalService,
        private msg: NzMessageService,
        private lazy: LazyService
    ) {
        this.reset();
        this.lazy.loadStyle('/assets/color.less', 'stylesheet/less');
    }

    private genValidKeys(): string[] {
        return Object.keys(this.data).filter(key => this.data[key].value !== this.data[key].default);
    }

    private genCode() {
        this.code = this.genValidKeys().map(key => `@${key}: ${this.data[key].value};`).join('\n');
    }

    apply() {
        const lessUrl = 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js';
        this.lazy.load(lessUrl).then(() => {
            const vars: any = {};
            this.genValidKeys().forEach(key => {
                vars[`@${key}`] = this.data[key].value;
            });
            (window as any).less.modifyVars(vars).then(() => {
                this.msg.success('应用成功');
            });
        });
    }

    reset(nowData?: Object) {
        nowData = nowData || {};
        const data = deepCopy(DEFAULT);
        Object.keys(data).forEach(key => {
            data[key] = Object.assign({}, data[key], <EditorItem>{
                value: nowData[key] || data[key].default,
                revising: false
            });
        });
        this.data = data;
    }

    showGen(tplContent: TemplateRef<{}>) {
        this.genCode();
        this.modalSrv.create({
            nzContent: tplContent,
            nzFooter: null,
            nzClosable: false,
            nzWidth: 800
        });
    }

    showParse(tplContent: TemplateRef<{}>) {
        this.genCode();
        const modal = this.modalSrv.create({
            nzContent: tplContent,
            nzFooter: [
                {
                    label: '还原',
                    onClick: () => {
                        const result: any = {};
                        (this.parse || '').trim().split('\n').forEach(str => {
                            const match = /@([^:]+):([^;]+);/ig.exec(str);
                            if (match) {
                                result[`${match[1].trim()}`] = match[2].trim();
                            }
                        });
                        console.warn(this.parse, result);
                        this.reset(result);
                        modal.destroy();
                    }
                }
            ],
            nzClosable: false,
            nzWidth: 800
        });
    }
}
