/* eslint-disable @typescript-eslint/no-explicit-any */
import { SiteConfig } from '../interfaces';
import { generateSluggedId, genValidId, isHeading } from '../utils/utils';

const JsonML = require('jsonml.js/lib/utils');

interface TocItem {
  id: string;
  title: string;
  h: number;
  children?: TocItem[];
}

function fixChildren(list: TocItem[]): TocItem[] {
  if (list.length <= 1) return list;
  let resultPointer = -1;
  let parentH = list[0].h;
  const result: TocItem[] = [];
  for (const item of list) {
    if (item.h !== parentH) {
      if (!result[resultPointer].children) {
        result[resultPointer].children = [];
      }
      result[resultPointer].children!!.push(item);
    } else {
      parentH = item.h;
      ++resultPointer;
      result.push(item);
    }
  }
  return result;
}

export function toc(markdownData: any, siteConfig: SiteConfig): TocItem[] {
  const maxDepth = siteConfig.tocMaxDepth || 3;
  const listItems = JsonML.getChildren(markdownData.content)
    .filter((node: any) => {
      const tagName = JsonML.getTagName(node);
      return isHeading(tagName) && +tagName.charAt(1) <= maxDepth;
    })
    .map((node: any) => {
      const slugged = generateSluggedId(JsonML.getChildren(node));
      return {
        id: genValidId(`${slugged.id}`),
        title: slugged.text,
        h: +JsonML.getTagName(node).charAt(1)
      } as TocItem;
    });
  return fixChildren(listItems);
}
