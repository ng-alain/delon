/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { DefaultTreeDocument, DefaultTreeElement, parseFragment } from 'parse5';

export function findElementsWithTagName(html: string, tagName: string) {
  const document = parseFragment(html, {
    sourceCodeLocationInfo: true,
  }) as DefaultTreeDocument;
  const elements: DefaultTreeElement[] = [];

  const visitNodes = nodes => {
    nodes.forEach(node => {
      if (node.childNodes) {
        visitNodes(node.childNodes);
      }

      if (node.tagName === tagName) {
        elements.push(node);
      }
    });
  };

  visitNodes(document.childNodes);

  return elements;
}

/**
 * Parses a HTML fragment and traverses all AST nodes in order find elements that
 * include the specified attribute.
 */
export function findElementsWithAttribute(html: string, attributeName: string) {
  const document = parseFragment(html, {
    sourceCodeLocationInfo: true,
  }) as DefaultTreeDocument;
  const elements: DefaultTreeElement[] = [];

  const visitNodes = nodes => {
    nodes.forEach(node => {
      if (node.childNodes) {
        visitNodes(node.childNodes);
      }

      if (
        node.attrs &&
        node.attrs.some(attr => attr.name === attributeName.toLowerCase())
      ) {
        elements.push(node);
      }
    });
  };

  visitNodes(document.childNodes);

  return elements;
}

/**
 * Finds elements with explicit tag names that also contain the specified attribute. Returns the
 * attribute start offset based on the specified HTML.
 */
export function findAttributeOnElementWithTag(
  html: string,
  name: string,
  tagNames: string[],
) {
  return findElementsWithAttribute(html, name)
    .filter(element => tagNames.includes(element.tagName))
    .map(element => getStartOffsetOfAttribute(element, name));
}

/**
 * Finds elements that contain the given attribute and contain at least one of the other
 * specified attributes. Returns the primary attribute's start offset based on the specified HTML.
 */
export function findAttributeOnElementWithAttrs(
  html: string,
  name: string,
  attrs: string[],
) {
  return findElementsWithAttribute(html, name)
    .filter(element => attrs.some(attr => hasElementAttribute(element, attr)))
    .map(element => getStartOffsetOfAttribute(element, name));
}

/** 查找元素是否包含属性，返回开始位置集合 */
export function findElements(
  html: string,
  tagName: string,
): number[] {
  return findElementsWithTagName(html, tagName)
    .map(element => element.sourceCodeLocation.startOffset);
}

/** 查找元素是否包含属性，返回开始位置集合 */
export function findElementHasAttribute(
  html: string,
  tagName: string,
  attr: string,
): number[] {
  return findElementsWithTagName(html, tagName)
    .filter(element => hasElementAttribute(element, attr))
    .map(element => getStartOffsetOfAttribute(element, attr));
}

/** 查找元素是否包含一组属性，返回一个属性与开始位置的数组集合 */
export function findElementHasAttributes(
  html: string,
  tagName: string,
  attrs: string[],
): { attr: string; offset: number }[] {
  const res: { attr: string; offset: number }[] = [];
  findElementsWithTagName(html, tagName).forEach(node => {
    attrs.filter(attr => hasElementAttribute(node, attr)).forEach(attr => {
      res.push({ attr, offset: getStartOffsetOfAttribute(node, attr) });
    });
  });
  return res;
}

/** Shorthand function that checks if the specified element contains the given attribute. */
function hasElementAttribute(
  element: DefaultTreeElement,
  attributeName: string,
): boolean {
  return (
    element.attrs &&
    element.attrs.some(attr => attr.name === attributeName.toLowerCase())
  );
}

/** Gets the start offset of the given attribute from a Parse5 element. */
export function getStartOffsetOfAttribute(
  element: any,
  attributeName: string,
): number {
  return element.sourceCodeLocation.attrs[attributeName.toLowerCase()]
    .startOffset;
}
