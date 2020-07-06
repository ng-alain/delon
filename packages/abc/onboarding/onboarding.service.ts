import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  OnDestroy,
} from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { Subscription } from 'rxjs';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingData, OnboardingItem, OnboardingOpType } from './onboarding.types';

@Injectable({ providedIn: 'root' })
export class OnboardingService implements OnDestroy {
  private compRef: ComponentRef<OnboardingComponent>;
  private op$: Subscription;
  private data: OnboardingData;
  private active = 0;

  private _getDoc(): Document {
    return this.doc;
  }

  constructor(
    private i18n: DelonLocaleService,
    private appRef: ApplicationRef,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  private attach(): void {
    const compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
    this.appRef.attachView(compRef.hostView);
    const compNode = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
    const doc = this._getDoc();
    const cdk = doc.querySelector('.cdk-overlay-container') as HTMLElement;
    if (cdk) {
      doc.body.insertBefore(compNode, cdk);
    } else {
      doc.body.appendChild(compNode);
    }
    this.op$ = this.compRef.instance.op.subscribe((type: OnboardingOpType) => {
      switch (type) {
        case 'next':
          this.next();
          break;
        case 'prev':
          this.prev();
          break;
        default:
          this.done();
          break;
      }
    });
  }

  private destroy(): void {
    this.appRef.detachView(this.compRef.hostView);
    this.compRef.destroy();
    this.op$.unsubscribe();
  }

  private showItem(cleanTime = false): void {
    const items = this.data.items!;
    const item = {
      position: 'bottomLeft',
      ...this.i18n.getData('onboarding'),
      ...items[this.active],
    } as OnboardingItem;
    Object.assign(this.compRef.instance, { item, data: this.data, active: this.active, max: items.length });
    setTimeout(() => this.compRef.instance.updatePosition({ time: cleanTime ? 0 : 300 }));
  }

  start(data: OnboardingData): void {
    this.data = {
      items: [],
      mask: true,
      maskClosable: true,
      animation: false,
      showTotal: false,
      ...data,
    };
    this.active = 0;
    this.attach();
    this.showItem(true);
  }

  next(): void {
    if (this.active + 1 >= this.data.items!.length) {
      this.done();
      return;
    }
    ++this.active;
    this.showItem();
  }

  prev(): void {
    if (this.active - 1 < 0) {
      return;
    }
    --this.active;
    this.showItem();
  }

  done(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
