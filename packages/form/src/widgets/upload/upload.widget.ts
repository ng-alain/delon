import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';

import { deepGet } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';

import { SFUploadWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-upload',
  templateUrl: './upload.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class UploadWidget extends ControlUIWidget<SFUploadWidgetSchema> implements OnInit {
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
    this.injector.get<NzModalService>(NzModalService).create({
      nzContent: `<img src="${_url}" class="img-fluid" />`,
      nzFooter: null
    });
  };
}
