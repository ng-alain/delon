import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UploadChangeParam, UploadFile } from 'ng-zorro-antd/upload';
import { of } from 'rxjs';
import { SFValue } from '../../interface';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFUploadWidgetSchema } from './schema';

@Component({
  selector: 'sf-upload',
  templateUrl: './upload.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class UploadWidget extends ControlUIWidget<SFUploadWidgetSchema> implements OnInit {
  i: any;
  fileList: UploadFile[] = [];
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
    const res: any = {
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

  change(args: UploadChangeParam) {
    if (this.ui.change) this.ui.change(args);
    if (args.type !== 'success') return;
    this._setValue(args.fileList);
  }

  reset(value: SFValue) {
    const { fileList } = this.ui;
    (fileList ? of(fileList) : Array.isArray(value) ? of(value) : getData(this.schema, this.ui, null)).subscribe(list => {
      this.fileList = list as UploadFile[];
      this._setValue(this.fileList);
      this.detectChanges();
    });
  }

  private _getValue(file: UploadFile) {
    return deepGet(file.response, this.i.resReName, file.response);
  }

  private _setValue(fileList: UploadFile[]) {
    fileList
      .filter(file => !file.url)
      .forEach(file => {
        file.url = deepGet(file.response, this.i.urlReName);
      });
    const res = fileList.filter(w => w.status === 'done').map(file => this._getValue(file));
    this.setValue(this.i.multiple === true ? res : res.pop());
  }

  handleRemove = () => {
    this._setValue(this.fileList);
    return true;
  };

  handlePreview = (file: UploadFile) => {
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
      nzFooter: null,
    });
  };
}
