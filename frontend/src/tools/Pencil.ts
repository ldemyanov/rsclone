import { TCanvasElement } from '@src/types';
import Tool from './Tool';
import getCanvasMousePosition from '@src/helpers/getCanvasMousePosition';

interface IPencil {
  isMouseDown: boolean;
  path: Array<[x: number, y: number]> | null;
  saved: string;
  listen: () => void;
  onMouseDownHandler: (event: MouseEvent) => void;
  onMouseUpHandler: (event: MouseEvent) => void;
  onMouseMoveHandler: (event: MouseEvent) => void;
}

export default class Pencil extends Tool implements IPencil {
  public isMouseDown;
  public path: Array<[x: number, y: number]> | null;
  public saved;

  constructor(canvas: TCanvasElement) {
    super(canvas);
    this.listen();
    this.isMouseDown = false;
    this.path = null;
    this.saved = '';
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

    if (this.canvas) {
      const { xCoordinate, yCoordinate } = getCanvasMousePosition(event, this.canvas);
      this.path = [[xCoordinate, yCoordinate]];
      this.saved = this.canvas.toDataURL();
      this.ctx.beginPath();
      this.draw(xCoordinate, yCoordinate);
    }
  }

  public onMouseUpHandler() {
    this.isMouseDown = false;
  }

  public onMouseMoveHandler(event: MouseEvent) {
    if (this.isMouseDown && this.canvas) {
      const { xCoordinate, yCoordinate } = getCanvasMousePosition(event, this.canvas);
      this.draw(xCoordinate, yCoordinate);
    }
  }

  public onMouseLeaveHandler() {
    this.isMouseDown = false;
  }

  public draw(xCoordinate: number, yCoordinate: number) {
    if (this.saved) {
      const canvasImg = new Image();
      canvasImg.src = this.saved;
      this.path!.push([xCoordinate, yCoordinate]);
      canvasImg.onload = () => {
        if (this.canvas) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.drawImage(canvasImg, 0, 0, this.canvas.width, this.canvas.height);
          this.ctx.lineTo(xCoordinate, yCoordinate);
          this.ctx.stroke();
        }
      };
    }
  }
}
