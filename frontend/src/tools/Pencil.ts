import { TCanvasElement } from '@src/types';
import Tool from './Tool';

interface IPencil {
  isMouseDown: boolean;
  listen: () => void;
  onMouseDownHandler: (event: MouseEvent) => void;
  onMouseUpHandler: (event: MouseEvent) => void;
  onMouseMoveHandler: (event: MouseEvent) => void;
}

export default class Pencil extends Tool implements IPencil {
  public isMouseDown: boolean;

  constructor(canvas: TCanvasElement) {
    super(canvas);
    this.listen();
    this.isMouseDown = false;
  }

  public listen() {
    this.canvas!.onmousedown = this.onMouseDownHandler.bind(this);
    this.canvas!.onmouseup = this.onMouseUpHandler.bind(this);
    this.canvas!.onmousemove = this.onMouseMoveHandler.bind(this);
  }

  public onMouseDownHandler(event: MouseEvent) {
    // const startXCoordinate = event.pageX - target;
    console.log(event);

    this.isMouseDown = true;
    this.ctx.beginPath();
    // this.ctx.moveTo(event.pageX - event.offsetX, event.pageY - event.offsetY);
  }

  public onMouseUpHandler(event: MouseEvent) {
    this.isMouseDown = false;
  }

  public onMouseMoveHandler(event: MouseEvent) {
    if (this.isMouseDown) {
      this.draw(event.offsetX, event.offsetY);
    }
  }

  public draw(xCoordinate: number, yCoordinate: number) {
    console.log(xCoordinate, yCoordinate);
    this.ctx.lineTo(xCoordinate, yCoordinate);
    this.ctx.stroke();
    console.log('draw');
  }
}
