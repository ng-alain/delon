import { Injectable } from '@angular/core';

@Injectable()
export class DelonACLConfig {
    /**
     * 路由守卫失败后跳转，默认：`/403`
     */
    guard_url? = '/403';
}
