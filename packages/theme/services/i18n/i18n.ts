import { InjectionToken, Injectable  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter } from 'rxjs/operators';

export interface AlainI18NService {
    [key: string]: any;

    use(lang: string): void;

    getLangs(): any[];

    fanyi(key: string): any;

    readonly change: Observable<string>;
}

export const ALAIN_I18N_TOKEN = new InjectionToken<AlainI18NService>('alainTranslatorToken');

@Injectable()
export class AlainI18NServiceFake implements AlainI18NService {
    private change$ = new BehaviorSubject<string>(null);

    get change(): Observable<string> {
        return this.change$.asObservable().pipe(filter(w => w != null));
    }

    use(lang: string): void {
        this.change$.next(lang);
    }

    getLangs(): any[] {
        return [];
    }

    fanyi(key: string) {
        return key;
    }
}
