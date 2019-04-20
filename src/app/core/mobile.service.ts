import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MobileService {
  private notify$ = new BehaviorSubject<boolean>(null!);

  next(value: boolean) {
    this.notify$.next(value);
  }

  get change() {
    return this.notify$.asObservable();
  }
}
