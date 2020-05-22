import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  theme$ = new ReplaySubject<string>(1);
}
