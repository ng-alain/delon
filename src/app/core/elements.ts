import { isPlatformBrowser } from '@angular/common';
import {
  EnvironmentProviders,
  Injector,
  PLATFORM_ID,
  Provider,
  inject,
  provideEnvironmentInitializer
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { EXAMPLE_COMPONENTS } from '../routes/gen/examples';
// import { IconComponent } from '../shared/components/icon/icon.component';

export function provideElements(): Array<Provider | EnvironmentProviders> {
  return [
    provideEnvironmentInitializer(() => {
      registerElements(inject(Injector), inject(PLATFORM_ID));
    })
  ];
}

function registerElements(injector: Injector, platformId: object): void {
  // issues: https://github.com/angular/angular/issues/24551#issuecomment-397862707
  if (!isPlatformBrowser(platformId) || customElements.get('nz-icon')) {
    return;
  }
  Object.keys(EXAMPLE_COMPONENTS).forEach(key => {
    const element = createCustomElement(EXAMPLE_COMPONENTS[key].component, {
      injector
    });
    customElements.define(key, element);
  });
  // icon
  // customElements.define('nz-icon', createCustomElement(IconComponent, { injector }));
}
