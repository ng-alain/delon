export function isEmpty(element: HTMLElement): boolean {
  const nodes = element.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes.item(i);
    if (node.nodeType === 1 && (node as HTMLElement).outerHTML.toString().trim().length !== 0) {
      return false;
    } else if (node.nodeType === 3 && node.textContent!.toString().trim().length !== 0) {
      return false;
    }
  }
  return true;
}

export function toBoolean(value: any, allowUndefined: boolean | null = false): boolean | undefined {
  return allowUndefined && typeof value === 'undefined' ? undefined : value != null && `${value}` !== 'false';
}

/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 * @example
 * ```typescript
 * @Input() @InputBoolean() visible: boolean = false;
 * @Input() @InputBoolean(null) visible: boolean = false;
 * ```
 */
export function InputBoolean(allowUndefined: boolean | null = false): any {
  return function InputBooleanPropDecorator(target: object, name: string): void {
    // Add our own private prop
    const privatePropName = `$$__${name}`;

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputBoolean decorator.`);
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true,
    });

    Object.defineProperty(target, name, {
      get(): boolean {
        return this[privatePropName]; // tslint:disable-line:no-invalid-this
      },
      set(value: any): void {
        this[privatePropName] = toBoolean(value, allowUndefined); // tslint:disable-line:no-invalid-this
      },
    });
  };
}

export function toNumber(value: any): number;
export function toNumber<D>(value: any, fallback: D): number | D;
export function toNumber(value: any, fallbackValue: number = 0): number {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}

/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 * @example
 * ```typescript
 * @Input() @InputNumber() visible: number = 1;
 * @Input() @InputNumber(null) visible: number = 2;
 * ```
 */
export function InputNumber(fallback: number | null = 0): any {
  return function InputBooleanPropDecorator(target: object, name: string): void {
    // Add our own private prop
    const privatePropName = `$$__${name}`;

    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputNumber decorator.`);
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true,
    });

    Object.defineProperty(target, name, {
      get(): boolean {
        return this[privatePropName]; // tslint:disable-line:no-invalid-this
      },
      set(value: any): void {
        this[privatePropName] = toNumber(value, fallback); // tslint:disable-line:no-invalid-this
      },
    });
  };
}
