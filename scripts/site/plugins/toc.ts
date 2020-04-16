const JsonML = require('jsonml.js/lib/utils');
import { isHeading, generateSluggedId } from '../utils/utils';
import { SiteConfig } from '../interfaces';

export function toc(markdownData: any, siteConfig: SiteConfig) {
  const maxDepth = siteConfig.tocMaxDepth || 3;
  const listItems = JsonML.getChildren(markdownData.content)
    .filter((node: any) => {
      const tagName = JsonML.getTagName(node);
      return isHeading(tagName) && +tagName.charAt(1) <= maxDepth;
    })
    .map((node: any) => {
      const slugged = generateSluggedId(JsonML.getChildren(node));
      return {
        id: `${slugged.id}`,
        title: slugged.text,
        h: +JsonML.getTagName(node).charAt(1),
      };
    });
  return listItems;
}
