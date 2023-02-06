import { TCanvasElement } from '@src/types';

interface ITool {
  canvas: TCanvasElement;
  ctx: CanvasRenderingContext2D;
  removeEvents: () => void;
}

export default class Tool implements ITool {
  public canvas;
  public ctx;

  constructor(canvas: TCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas!.getContext('2d')!;
    this.removeEvents();
  }

  removeEvents() {
    this.canvas!.onmousedown = null;
    this.canvas!.onmouseup = null;
    this.canvas!.onmousemove = null;
  }
}
