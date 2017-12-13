import { InjectionToken, Injectable  } from '@angular/core';

export interface AlainI18NService {
    [key: string]: any;

    use(lang: string, firstLoad: boolean): void;

    getLangs(): any[];

    fanyi(key: string): any;
}

export const ALAIN_I18N_TOKEN = new InjectionToken<AlainI18NService>('alainTranslatorToken');

@Injectable()
export class AlainI18NServiceFake implements AlainI18NService {

    use(lang: string, firstLoad: boolean = true): void {
    }

    getLangs(): any[] {
        return [];
    }

    fanyi(key: string) {
        return key;
    }
}
