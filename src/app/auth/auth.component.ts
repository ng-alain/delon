import { Component, Inject } from '@angular/core';
import { SocialService, DA_SERVICE_TOKEN, ITokenModel, ITokenService } from '@delon/auth';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.less'],
    providers: [ SocialService ]
})
export class AuthComponent {

    token: ITokenModel;
    constructor(private socialService: SocialService, @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {
        this.token = this.tokenService.get();
    }

    list = [
        {
            type: 'auth0',
            url: `//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent('http://localhost:4200/callback/auth0')}`
        },
        {
            type: 'github',
            url: `https://github.com/login/oauth/authorize?response_type=code&client_id=9d6baae4b04a23fcafa2&redirect_uri=${decodeURIComponent('http://localhost:4200/callback/github')}`
        },
        // https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow
        {
            type: 'facebook',
            url: `https://www.facebook.com/v2.11/dialog/oauth?client_id=154394978620541&redirect_uri=${decodeURIComponent('http://localhost:4200/callback/facebook')}`
        },
        // https://apps.dev.microsoft.com/#/appList
        {
            type: 'microsoft',
            url: `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&scope=openid&nonce=${+new Date}&client_id=e9323713-e4db-4356-a677-c3560bc469fd&redirect_uri=${decodeURIComponent('https://localhost:4200/callback/microsoft')}`
        },
        // https://console.developers.google.com/projectselector/apis/credentials
        {
            type: 'google',
            url: `https://accounts.google.com/o/oauth2/auth?prompt=consent&response_type=code&scope=openid&client_id=377935472541-3344d5rhbl73mkip7mtctvtnu7af7h8f.apps.googleusercontent.com&redirect_uri=${decodeURIComponent('http://localhost:4200/callback/google')}`
        },
        // https://console.developers.google.com/projectselector/apis/credentials
        {
            type: 'baidu',
            url: `http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&scope=basic&client_id=TRqBhFdVMl3Hb0d0gHw336db&redirect_uri=${decodeURIComponent('http://localhost:4200/callback/baidu')}`
        },
        // http://open.weibo.com/development
        {
            type: 'qq',
            url: `https://graph.qq.com/oauth2.0/authorize?response_type=code&state=&client_id=101449670&redirect_uri=${decodeURIComponent('http://localhost:4200/callback/qq')}`
        },
        // http://open.weibo.com/development
        {
            type: 'weixin',
            url: `https://open.weixin.qq.com/connect/qrconnect?appid=123&response_type=code&scope=snsapi_login&redirect_uri=${decodeURIComponent('http://localhost:4200/callback/qq')}#wechat_redirect`
        }
    ];

    open(item: any, openType: 'href' | 'window' = 'href') {
        if (openType === 'window') {
            this.socialService.login(item.url, '/auth', {
                type: 'window'
            }).subscribe(res => {
                this.token = res;
            });
        } else {
            this.socialService.login(item.url, '/auth', {
                type: 'href'
            });
        }
    }

}
