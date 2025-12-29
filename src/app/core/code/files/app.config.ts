export default `import { ApplicationConfig } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideStartup } from './startup.service';
import {
  zh_CN as delonLang,
  AlainProvideLang,
  provideAlain,
} from '@delon/theme';
import { AlainConfig } from '@delon/util/config';
import { zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { zhCN as dateLang } from 'date-fns/locale';
import ngLang from '@angular/common/locales/zh';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { mockInterceptor, provideMockConfig } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
import { withAutoCompleteWidget } from '@delon/form/widgets/autocomplete';
import { withCascaderWidget } from '@delon/form/widgets/cascader';
// import { withColorWidget } from '@delon/form/widgets/color';
import { withMentionWidget } from '@delon/form/widgets/mention';
import { withQrCodeWidget } from '@delon/form/widgets/qr-code';
import { withRateWidget } from '@delon/form/widgets/rate';
import { withSegmentedWidget } from '@delon/form/widgets/segmented';
import { withSliderWidget } from '@delon/form/widgets/slider';
import { withTagWidget } from '@delon/form/widgets/tag';
import { withTimeWidget } from '@delon/form/widgets/time';
import { withTransferWidget } from '@delon/form/widgets/transfer';
import { withTreeSelectWidget } from '@delon/form/widgets/tree-select';
import { withUploadWidget } from '@delon/form/widgets/upload';
import { provideCellWidgets } from '@delon/abc/cell';
import { provideSTWidgets } from '@delon/abc/st';
import { provideSFConfig } from '@delon/form';
import { provideReuseTabConfig } from '@delon/abc/reuse-tab';

const defaultLang: AlainProvideLang = {
  abbr: 'zh-CN',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};
const alainConfig: AlainConfig = {
  st: { ps: 3 },
};
const ngZorroConfig: NzConfig = {};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(), withInterceptors([mockInterceptor])),
    provideAlain({ config: alainConfig, defaultLang }),
    provideNzConfig(ngZorroConfig),
    provideMockConfig({ data: MOCKDATA }),
    provideCellWidgets(),
    provideSTWidgets(),
    provideSFConfig({
      widgets: [
        withAutoCompleteWidget(),
        withCascaderWidget(),
        // withColorWidget(),
        withMentionWidget(),
        withQrCodeWidget(),
        withRateWidget(),
        withSegmentedWidget(),
        withSliderWidget(),
        withTagWidget(),
        withTimeWidget(),
        withTransferWidget(),
        withTreeSelectWidget(),
        withUploadWidget(),
        // third
        // withMonacoEditorWidget(),
        // withTinymceWidget(),
      ],
    }),
    provideReuseTabConfig(),
    provideStartup(),
  ],
};
`;
