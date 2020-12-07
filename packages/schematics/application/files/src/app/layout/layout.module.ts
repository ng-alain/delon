import { NgModule } from '@angular/core';
import { LayoutDefaultModule } from '@delon/theme/layout-default';
import { SettingDrawerModule } from '@delon/theme/setting-drawer';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { SharedModule } from '@shared';

import { LayoutBasicComponent } from './basic/basic.component';
import { HeaderClearStorageComponent } from './basic/widgets/clear-storage.component';
import { HeaderFullScreenComponent } from './basic/widgets/fullscreen.component';<% if (i18n) { %>
import { HeaderI18nComponent } from './basic/widgets/i18n.component';<% } %>
import { HeaderSearchComponent } from './basic/widgets/search.component';
import { HeaderUserComponent } from './basic/widgets/user.component';
import { LayoutBlankComponent } from './blank/blank.component';

const COMPONENTS = [LayoutBasicComponent, LayoutBlankComponent];

const HEADERCOMPONENTS = [
  HeaderSearchComponent,
  HeaderFullScreenComponent,<% if (i18n) { %>
  HeaderI18nComponent,<% } %>
  HeaderClearStorageComponent,
  HeaderUserComponent,
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
const PASSPORT = [
  LayoutPassportComponent
];

@NgModule({
  imports: [SharedModule, ThemeBtnModule, SettingDrawerModule, LayoutDefaultModule],
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule { }
