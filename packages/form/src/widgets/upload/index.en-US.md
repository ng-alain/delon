---
title: upload
subtitle: Upload
type: Widgets
---

Upload file widget by select or drag.

## Note

- **Must** set `resReName` to get correct data
- `multiple` determine return array or one element
- If `enum` or `asyncData` is set, it will be converted to `fileList` (`nzFileList`), and **must** initially guarantee a `response` property to indicate remote data and make sure `resReName` can be obtained correctly
- Image preview: by default, it uses `nzModal` to show `url` or `thumbUrl` of file object

## API

### schema

Property     | Description | Type      | Default
-------------|-------------|-----------|--------
`[readOnly]` | Read only   | `boolean` | -

### ui

Property                  | Description                                                                                                                                             | Type                                                                        | Default
--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|--------------------------
`[asyncData]`             | Asynchronous data source                                                                                                                                | `() => Observable<SFSchemaEnumType[]>`                                      | -
`[type]`                  | Upload type                                                                                                                                             | `select,drag`                                                               | `select`
`[text]`                  | Text of button                                                                                                                                          | `string`                                                                    | `点击上传`
`[hint]`                  | Text of hint, it is valid during drag                                                                                                                   | `string`                                                                    | `支持单个或批量，严禁上传公司数据或其他安全文件`
`[resReName]`             | Rename return parameter, support nested style `a.b.c`, the whole return body will be used if it is not set                                              | `string`                                                                    | -
`[urlReName]`             | Rename image preview URl return parameter, support nested style `a.b.c`, `url`, `thumbUrl` of file object will be used if it is not set                 | `string`                                                                    | -
`[action]`                | Required attribute, upload URL                                                                                                                          | `string, ((file: UploadFile) => string, Observable<string>)`                | -
`[accept]`                | File types that can be accepted, see details from [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | `string, string[]`                                                          | -
`[limit]`                 | limit number of single upload when `multiple` is set, 0 means unlimited                                                                                 | `number`                                                                    | `0`
`[filter]`                | Custom filter when choosed file                                                                                                                         | `UploadFilter[]`                                                            | -
`[fileList]`              | File list                                                                                                                                               | `UploadFile[]`                                                              | -
`[fileSize]`              | Limit file size, unit: KB; `0` means unlimited                                                                                                          | `number`                                                                    | `0`
`[fileType]`              | Limit file type, e.g. `image/png,image/jpeg,image/gif,image/bmp`                                                                                        | `string`                                                                    | -
`[headers]`               | Set request header of upload                                                                                                                            | `Object, (file: UploadFile) => {} | Observable<{}>`                         | -
`[listType]`              | Built-in style of upload list                                                                                                                           | `text,picture,picture-card`                                                 | `text`
`[showUploadList]`        | Whether show upload list, can set as an object, used to set `showPreviewIcon` and `showRemoveIcon` separately                                           | `boolean`                                                                   | `true`
`[multiple]`              | Whether support multiple file selection. IE10+ supported. You can select multiple files with holding `ctrl`                                             | `boolean`                                                                   | `false`
`[name]`                  | File name when sending to backend                                                                                                                       | `string`                                                                    | `file`
`[data]`                  | Uploading params or function which can return uploading params                                                                                          | `Object, (file: UploadFile) => {} | Observable<{}>`                         | -
`[withCredentials]`       | Whether set cookie during upload                                                                                                                        | `boolean`                                                                   | `false`
`[directory]`             | Support upload whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory))                                                              | `boolean`                                                                   | `false`
`[openFileDialogOnClick]` | Click to open file dialog                                                                                                                               | `boolean`                                                                   | `true`
`[beforeUpload]`          | Hook function which will be executed before uploading, parameter is file to be uploaded, stop uploading when `false` is returned                        | `(file: UploadFile, fileList: UploadFile[]) => boolean｜Observable<boolean>` | -
`[customRequest]`         | Override the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest                                | `(item: UploadXHRArgs) => Subscription`                                     | -
`[remove]`                | Callback function when remove is clicked, won't remove when `false` is returned                                                                         | `(file: UploadFile) => boolean｜Observable`                                  | -
`[preview]`               | Callback function when file link or preview icon is clicked                                                                                             | `(file: UploadFile) => void`                                                | -
`[previewFile]`           | Customize preview file logic                                                                                                                            | `(file: UploadFile) => Observable<string>`                                  | -
`[download]`              | Callback function when clicking the method to download the file, jump to a new tab with url of file                                                     | `(file: UploadFile) => void`                                                | -
`[transformFile]`         | Transform file before file conversion. Support to return Observable object                                                                              | `(file: UploadFile) => UploadTransformFileType`                             | -
`[change]`                | Callback function when uploading state is changing                                                                                                      | `(args: UploadChangeParam) => void`                                         | -
