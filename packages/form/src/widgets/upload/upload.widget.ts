import { Component, OnInit } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService, UploadChangeParam, UploadFile } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { SFValue } from '../../interface';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-upload',
  template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-upload
        [nzType]="i.type"
        [nzFileList]="fileList"
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
        [nzRemove]="ui.remove"
        [nzPreview]="handlePreview"
        (nzChange)="change($event)"
      >
        <ng-container [ngSwitch]="btnType">
          <ng-container *ngSwitchCase="'plus'">
            <i nz-icon type="plus"></i>
            <div class="ant-upload-text" [innerHTML]="i.text"></div>
          </ng-container>
          <ng-container *ngSwitchCase="'drag'">
            <p class="ant-upload-drag-icon"><i nz-icon type="inbox"></i></p>
            <p class="ant-upload-text" [innerHTML]="i.text"></p>
            <p class="ant-upload-hint" [innerHTML]="i.hint"></p>
          </ng-container>
          <ng-container *ngSwitchDefault>
            <button type="button" nz-button>
              <i nz-icon type="upload"></i><span [innerHTML]="i.text"></span>
            </button>
          </ng-container>
        </ng-container>
      </nz-upload>
    </sf-item-wrap>
  `,
})
export class UploadWidget extends ControlWidget implements OnInit {
  // tslint:disable-next-line:no-any
  i: any;
  fileList: UploadFile[] = [];
  btnType = '';

  ngOnInit(): void {
    const {
      type,
      text,
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
      beforeUpload,
      customRequest,
      directory,
      openFileDialogOnClick,
    } = this.ui;
    this.i = {
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
      showUploadList: toBool(showUploadList, true),
      withCredentials: toBool(withCredentials, false),
      resReName: (resReName || '').split('.'),
      beforeUpload: typeof beforeUpload === 'function' ? beforeUpload : null,
      customRequest: typeof customRequest === 'function' ? customRequest : null,
    };
    if (this.i.listType === 'picture-card') {
      this.btnType = 'plus';
    }
    if (this.i.type === 'drag') {
      this.i.listType = null;
      this.btnType = 'drag';
      this.i.text = this.ui.text || `单击或拖动文件到该区域上传`;
      this.i.hint =
        this.ui.hint || `支持单个或批量，严禁上传公司数据或其他安全文件`;
    }
  }

  change(args: UploadChangeParam) {
    if (this.ui.change) this.ui.change(args);
    if (args.type !== 'success') return;
    this._setValue(args.fileList);
  }

  reset(value: SFValue) {
    const { fileList } = this.ui;
    (fileList
      ? of(fileList)
      : getData(this.schema, this.ui, this.formProperty.formData)
    ).subscribe(list => {
      this.fileList = list as UploadFile[];
      this._setValue(this.fileList);
      this.detectChanges();
    });
  }

  private _setValue(fileList: UploadFile[]) {
    const res = fileList.map(item =>
      deepGet(item.response, this.i.resReName, item.response),
    );
    this.setValue(this.i.multiple === true ? res : res.pop());
  }

  handlePreview = (file: UploadFile) => {
    if (this.ui.preview) {
      this.ui.preview(file);
      return;
    }
    this.injector
      .get(NzModalService)
      .create({
        nzContent: `<img src="${file.url ||
          file.thumbUrl}" class="img-fluid" />`,
        nzFooter: null,
      })
      .afterClose.subscribe(() => this.detectChanges());
  }
}
