import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { ControlUIWidget, DelonFormModule, SFValue, getData, toBool } from '@delon/form';
import { deepGet } from '@delon/util/other';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzUploadChangeParam, NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

import type { SFUploadWidgetSchema } from './schema';

@Component({
  selector: 'sf-upload',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-upload
      [nzType]="i.type"
      [(nzFileList)]="fileList"
      [nzDisabled]="disabled"
      [nzAction]="i.action"
      [nzDirectory]="i.directory"
      [nzOpenFileDialogOnClick]="i.openFileDialogOnClick"
      [nzAccept]="i.accept"
      [nzLimit]="i.limit"
      [nzFilter]="i.filter"
      [nzSize]="i.size"
      [nzFileType]="i.fileType"
      [nzHeaders]="ui.headers"
      [nzData]="ui.data"
      [nzListType]="i.listType"
      [nzMultiple]="i.multiple"
      [nzName]="i.name"
      [nzShowUploadList]="i.showUploadList"
      [nzWithCredentials]="i.withCredentials"
      [nzBeforeUpload]="i.beforeUpload"
      [nzCustomRequest]="i.customRequest"
      [nzRemove]="ui.remove || handleRemove"
      [nzPreview]="handlePreview"
      [nzPreviewFile]="ui.previewFile"
      [nzDownload]="ui.download"
      [nzTransformFile]="ui.transformFile"
      (nzChange)="change($event)"
      [nzShowButton]="fileList.length < i.limitFileCount"
    >
      @switch (btnType) {
        @case ('plus') {
          <nz-icon nzType="plus" />
          <div class="ant-upload-text" [innerHTML]="i.text"></div>
        }
        @case ('drag') {
          <p class="ant-upload-drag-icon"><nz-icon nzType="inbox" /></p>
          <p class="ant-upload-text" [innerHTML]="i.text"></p>
          <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
        }
        @default {
          <button type="button" nz-button><nz-icon nzType="upload" /><span [innerHTML]="i.text"></span></button>
        }
      }
    </nz-upload>
  </sf-item-wrap>`,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzUploadModule, NzIconModule, NzButtonModule]
})
export class UploadWidget extends ControlUIWidget<SFUploadWidgetSchema> implements OnInit {
  static readonly KEY = 'upload';

  i: NzSafeAny;
  fileList: NzUploadFile[] = [];
  btnType = '';

  ngOnInit(): void {
    const {
      type,
      text,
      hint,
      action,
      accept,
      limit,
      filter,
      fileSize,
      fileType,
      listType,
      multiple,
      name,
      showUploadList,
      withCredentials,
      resReName,
      urlReName,
      beforeUpload,
      customRequest,
      directory,
      openFileDialogOnClick,
      limitFileCount
    } = this.ui;
    const res: NzSafeAny = {
      type: type || 'select',
      text: text || '点击上传',
      action: action || '',
      accept: accept || '',
      directory: toBool(directory, false),
      openFileDialogOnClick: toBool(openFileDialogOnClick, true),
      limit: limit == null ? 0 : +limit,
      filter: filter == null ? [] : filter,
      size: fileSize == null ? 0 : +fileSize,
      fileType: fileType || '',
      listType: listType || 'text',
      multiple: toBool(multiple, false),
      name: name || 'file',
      showUploadList: showUploadList == null ? true : showUploadList,
      withCredentials: toBool(withCredentials, false),
      resReName: (resReName || '').split('.'),
      urlReName: (urlReName || '').split('.'),
      beforeUpload: typeof beforeUpload === 'function' ? beforeUpload : null,
      customRequest: typeof customRequest === 'function' ? customRequest : null,
      limitFileCount: limitFileCount || 999
    };
    if (res.listType === 'picture-card') {
      this.btnType = 'plus';
    }
    if (res.type === 'drag') {
      res.listType = null;
      this.btnType = 'drag';
      res.text = text || `单击或拖动文件到该区域上传`;
      res.hint = hint || `支持单个或批量，严禁上传公司数据或其他安全文件`;
    }
    this.i = res;
  }

  change(args: NzUploadChangeParam): void {
    if (this.ui.change) this.ui.change(args);
    if (args.type !== 'success') return;
    this._setValue(args.fileList);
  }

  reset(value: SFValue): void {
    const { fileList } = this.ui;
    (fileList ? of(fileList) : Array.isArray(value) ? of(value) : getData(this.schema, this.ui, null)).subscribe(
      list => {
        this.fileList = list as NzUploadFile[];
        this.formProperty._value = this.pureValue(list);
        this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: false });
        this.detectChanges();
      }
    );
  }

  private _getValue(file: NzUploadFile): NzSafeAny {
    return deepGet(file.response, this.i.resReName, file.response);
  }

  private pureValue(fileList: NzUploadFile[]): NzSafeAny {
    fileList
      .filter(file => !file.url)
      .forEach(file => {
        file.url = deepGet(file.response, this.i.urlReName);
      });
    const res = fileList.filter(w => w.status === 'done').map(file => this._getValue(file));
    return this.i.multiple === true ? res : res.pop();
  }

  private _setValue(fileList: NzUploadFile[]): void {
    this.setValue(this.pureValue(fileList));
  }

  handleRemove = (): boolean => {
    this._setValue(this.fileList);
    return true;
  };

  handlePreview = (file: NzUploadFile): void => {
    if (this.ui.preview) {
      this.ui.preview(file);
      return;
    }
    const _url = file.thumbUrl || file.url;
    if (!_url) {
      return;
    }
    this.injector.get(NzImageService, null)?.preview([{ src: _url }]);
  };
}
