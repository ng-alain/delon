import { PageHeaderModule } from '@delon/abc/page-header';
import { ResultModule } from '@delon/abc/result';
import { SEModule } from '@delon/abc/se';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';<% if (form) { %>
import { DelonFormModule } from '@delon/form';<% } %>

export const SHARED_DELON_MODULES = [PageHeaderModule, STModule, SEModule, SVModule, ResultModule<% if (form) { %>, DelonFormModule<% } %>];
