import { Component, OnInit } from '@angular/core';
import { deepGet } from '@delon/util';
import { NzModalService, UploadChangeParam, UploadFile } from 'ng-zorro-antd';
import { of } from 'rxjs';
import { SFValue } from '../../interface';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-upload',
  templateUrl: './upload.widget.html',
})
export class UploadWidget extends ControlWidget implements OnInit {
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
      urlReName,
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
      urlReName: (urlReName || '').split('.'),
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
      this.i.hint = this.ui.hint || `支持单个或批量，严禁上传公司数据或其他安全文件`;
    }
  }

  change(args: UploadChangeParam) {
    if (this.ui.change) this.ui.change(args);
    if (args.type !== 'success') return;
    this._setValue(args.fileList);
  }

  reset(value: SFValue) {
    const { fileList } = this.ui;
    (fileList ? of(fileList) : getData(this.schema, this.ui, this.formProperty.formData)).subscribe(
      list => {
        this.fileList = list as UploadFile[];
        this._setValue(this.fileList);
        this.detectChanges();
      },
    );
  }

  private _getValue(file: UploadFile) {
    return deepGet(file.response, this.i.resReName, file.response);
  }

  private _setValue(fileList: UploadFile[]) {
    fileList.filter(file => !file.url).forEach(file => {
      file.url = deepGet(file.response, this.i.urlReName);
    });
    const res = fileList.filter(w => w.status === 'done').map(file => this._getValue(file));
    this.setValue(this.i.multiple === true ? res : res.pop());
  }

  handleRemove = () => {
    this._setValue(this.fileList);
    return true;
  }

  handlePreview = (file: UploadFile) => {
    if (this.ui.preview) {
      this.ui.preview(file);
      return;
    }
    const _url = file.thumbUrl || file.url;
    if (!_url) {
      return ;
    }
    this.injector
      .get(NzModalService)
      .create({
        nzContent: `<img src="${_url}" class="img-fluid" />`,
        nzFooter: null,
      });
  }
}
