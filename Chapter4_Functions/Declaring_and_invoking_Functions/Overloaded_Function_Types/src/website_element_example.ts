type CreateElement = {
  // parameters , return
  (tag: 'a'): HTMLAnchorElement
  (tag: 'canvas'): HTMLCanvasElement
  (tag: string): HTMLElement
}

/* let createElement: CreateElement = (tag: string): HTMLElement => {
  return new HTMLElement()
}
 */
