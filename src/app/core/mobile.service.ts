import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MobileService {
  private notify$ = new BehaviorSubject<boolean>(null!);

  next(value: boolean): void {
    this.notify$.next(value);
  }

  get change(): Observable<boolean> {
    return this.notify$.asObservable();
  }
}
