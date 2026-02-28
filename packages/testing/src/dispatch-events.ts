/** Utility to dispatch any event on a Node. */
export function dispatchEvent(node: Node | Window, event: Event): Event {
  node.dispatchEvent(event);
  return event;
}

/** Shorthand to dispatch a fake event on a specified node. */
export function dispatchFakeEvent(node: Node | Window, type: string | Event, canBubble?: boolean): Event {
  return dispatchEvent(node, typeof type === 'string' ? new Event(type, { bubbles: canBubble ?? true }) : type);
}
