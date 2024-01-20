import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  NgModule,
  NgZone,
  OnDestroy,
  Output,
  inject
} from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SizeObserver implements OnDestroy {
  private _observedElements = new Map<
    Element,
    {
      observer: MutationObserver | null;
      readonly stream: Subject<MutationRecord[]>;
      count: number;
    }
  >();

  ngOnDestroy(): void {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }

  observe(element: Element): Observable<MutationRecord[]> {
    return new Observable((observer: Observer<MutationRecord[]>) => {
      const stream = this._observeElement(element);
      const subscription = stream.subscribe(observer);

      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }

  private _observeElement(element: Element): Subject<MutationRecord[]> {
    if (!this._observedElements.has(element)) {
      const stream = new Subject<MutationRecord[]>();
      let observer: MutationObserver | null = null;
      if (typeof MutationObserver !== 'undefined') {
        observer = new MutationObserver(mutations => stream.next(mutations));
        observer.observe(element, {
          attributes: true,
          attributeOldValue: true,
          attributeFilter: ['width', 'height', 'style']
        });
      }
      this._observedElements.set(element, { observer, stream, count: 1 });
    } else {
      this._observedElements.get(element)!.count++;
    }
    return this._observedElements.get(element)!.stream;
  }

  private _unobserveElement(element: Element): void {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element)!.count--;
      if (!this._observedElements.get(element)!.count) {
        this._cleanupObserver(element);
      }
    }
  }

  private _cleanupObserver(element: Element): void {
    if (this._observedElements.has(element)) {
      const { observer, stream } = this._observedElements.get(element)!;
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
}

@Directive({
  selector: '[observeSize]',
  exportAs: 'observeSize',
  standalone: true
})
export class ObserverSize implements AfterViewInit, OnDestroy {
  private readonly _obs = inject(SizeObserver);
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly ngZone = inject(NgZone);

  private _sub$: Subscription | null = null;
  @Output('observeSize') readonly event = new EventEmitter<MutationRecord[]>();

  ngAfterViewInit(): void {
    if (!this._sub$) {
      this._sub();
    }
  }

  private _sub(): void {
    this._unsub();
    const stream = this._obs.observe(this.el);
    this.ngZone.runOutsideAngular(() => {
      this._sub$ = stream.subscribe(this.event);
    });
  }

  private _unsub(): void {
    this._sub$?.unsubscribe();
  }

  ngOnDestroy(): void {
    this._unsub();
  }
}

@NgModule({
  exports: [ObserverSize],
  imports: [ObserverSize]
})
export class ObserversModule {}
