import { TCanvasElement } from '@src/types';
import Tool from './Tool';
import getCanvasMousePosition from '@src/helpers/getCanvasMousePosition';
import { ICanvasMousePosition } from '@src/helpers/getCanvasMousePosition';

interface IEraser {
  isMouseDown: boolean;
  currentColor: string;
  listen: () => void;
  onMouseDownHandler: (event: MouseEvent) => void;
  onMouseUpHandler: (event: MouseEvent) => void;
  onMouseMoveHandler: (event: MouseEvent) => void;
  onMouseLeaveHandler: (event: MouseEvent) => void;
}

export default class Eraser extends Tool implements IEraser {
  public isMouseDown;
  public currentColor;

  constructor(canvas: TCanvasElement) {
    super(canvas);
    this.listen();
    this.isMouseDown = false;
    this.currentColor = '';
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
    this.currentColor = this.ctx.strokeStyle as string;
    this.ctx.strokeStyle = '#FCFFFD';
    console.log(this.currentColor, this.ctx.strokeStyle);

    if (this.canvas) {
      this.draw(getCanvasMousePosition(event, this.canvas));
    }
  }

  public onMouseUpHandler() {
    this.isMouseDown = false;
    this.ctx.strokeStyle = this.currentColor;
    console.log(this.ctx.strokeStyle);
  }

  public onMouseMoveHandler(event: MouseEvent) {
    if (this.isMouseDown && this.canvas) {
      this.draw(getCanvasMousePosition(event, this.canvas));
    }
  }

  public onMouseLeaveHandler() {
    this.ctx.closePath();
    this.isMouseDown = false;
    this.ctx.strokeStyle = this.currentColor;
  }

  public draw({ xCoordinate, yCoordinate }: ICanvasMousePosition) {
    this.ctx.lineTo(xCoordinate, yCoordinate);
    this.ctx.stroke();
  }
}
