import { TCanvasElement } from '@src/types';
import Tool from './Tool';
import getCanvasMousePosition from '@src/helpers/getCanvasMousePosition';
import { ICanvasMousePosition } from '@src/helpers/getCanvasMousePosition';

interface IEraser {
  isMouseDown: boolean;
  listen: () => void;
  onMouseDownHandler: (event: MouseEvent) => void;
  onMouseUpHandler: (event: MouseEvent) => void;
  onMouseMoveHandler: (event: MouseEvent) => void;
  onMouseLeaveHandler: (event: MouseEvent) => void;
}

export default class Eraser extends Tool implements IEraser {
  public isMouseDown: boolean;

  constructor(canvas: TCanvasElement) {
    super(canvas);
    this.listen();
    this.isMouseDown = false;
  }

  public listen() {
    if (this.canvas) {
      this.canvas.onmousedown = this.onMouseDownHandler.bind(this);
      this.canvas.onmouseup = this.onMouseUpHandler.bind(this);
      this.canvas.onmousemove = this.onMouseMoveHandler.bind(this);
      this.canvas.onmouseleave = this.onMouseLeaveHandler.bind(this);
    }
  }

  public onMouseDownHandler(event: MouseEvent) {
    this.isMouseDown = true;
    this.ctx.beginPath();
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.strokeStyle = '#FCFFFD';

    if (this.canvas) {
      this.draw(getCanvasMousePosition(event, this.canvas));
    }
  }

  public onMouseUpHandler() {
    this.isMouseDown = false;
  }

  public onMouseMoveHandler(event: MouseEvent) {
    if (this.isMouseDown && this.canvas) {
      this.draw(getCanvasMousePosition(event, this.canvas));
    }
  }

  public onMouseLeaveHandler() {
    this.ctx.closePath();
    this.isMouseDown = false;
  }

  public draw({ xCoordinate, yCoordinate }: ICanvasMousePosition) {
    this.ctx.lineTo(xCoordinate, yCoordinate);
    this.ctx.stroke();
    console.log('draw');
  }
}
