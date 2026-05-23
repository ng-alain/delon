import slugify from 'slugify';

export function handleExploreStr(str: string, cr: string = '/'): string {
  return str.replace(/\\/g, cr);
}

export function genUpperName(name: string): string {
  return name
    .split(/-|\//g)
    .map(v => v.charAt(0).toUpperCase() + v.slice(1))
    .join('');
}
export function genComponentName(...names: string[]): string {
  return `${names
    .map(key =>
      key
        .split(/-\//g)
        .map(key => genUpperName(key))
        .join('')
    )
    .join('')}`;
}

export function genSelector(...names: string[]): string {
  return `${names.map(vv => vv.replace(/-|\//g, '-')).join('-')}`;
}

/**
 * @description Replace `{`, `}`, `@` to html entities
 */
export function angularNonBindAble(content: string): string {
  return content.replace(/{/g, '&#123;').replace(/}/g, '&#125;').replace(/@/g, '&#64;');
}

export function getOrFirst<T>(record: Record<string, T>, key: string, defaultKey?: string): T | undefined {
  if (key in record) return record[key];
  if (defaultKey && defaultKey in record) return record[defaultKey];

  const firstKey = Object.keys(record)[0];
  return firstKey ? record[firstKey] : undefined;
}

export function idSlug(title: string): string {
  return slugify(title, {
    remove: /[*+~.()'"!:@\\[\]]/g,
    replacement: '_',
    lower: true
  });
}
