import { TCanvasElement } from '@src/types';
import Tool from './Tool';
import getCanvasMousePosition from '@src/helpers/getCanvasMousePosition';
import { ICanvasMousePosition } from '@src/helpers/getCanvasMousePosition';

interface ILine {
  isMouseDown: boolean;
  startX: number;
  startY: number;
  saved: string | null;
  listen: () => void;
  onMouseDownHandler: (event: MouseEvent) => void;
  onMouseUpHandler: (event: MouseEvent) => void;
  onMouseMoveHandler: (event: MouseEvent) => void;
}

export default class Line extends Tool implements ILine {
  public isMouseDown: boolean;
  public startX: number;
  public startY: number;
  public saved: string | null;

  constructor(canvas: TCanvasElement) {
    super(canvas);
    this.listen();
    this.isMouseDown = false;
    this.startX = 0;
    this.startY = 0;
    this.saved = null;
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
    if (this.canvas) {
      this.isMouseDown = true;
      this.startX = getCanvasMousePosition(event, this.canvas).xCoordinate;
      this.startY = getCanvasMousePosition(event, this.canvas).yCoordinate;
      this.ctx.beginPath();
      this.ctx.lineWidth = 4;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.strokeStyle = 'black';
      this.saved = this.canvas.toDataURL();

      this.draw({ xCoordinate: this.startX, yCoordinate: this.startY });
    }
  }

  public onMouseUpHandler() {
    this.ctx.closePath();
    this.isMouseDown = false;
  }

  public onMouseMoveHandler(event: MouseEvent) {
    if (this.isMouseDown && this.canvas) {
      this.draw(getCanvasMousePosition(event, this.canvas));
    }
  }

  public onMouseLeaveHandler() {
    this.isMouseDown = false;
    this.ctx.closePath();
  }

  public draw({ xCoordinate, yCoordinate }: ICanvasMousePosition) {
    if (this.saved) {
      const canvasImg = new Image();
      canvasImg.src = this.saved;
      canvasImg.onload = () => {
        if (this.canvas) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.drawImage(canvasImg, 0, 0, this.canvas.width, this.canvas.height);
          this.ctx.beginPath();
          this.ctx.moveTo(this.startX, this.startY);
          this.ctx.lineTo(xCoordinate, yCoordinate);
          this.ctx.stroke();
        }
      };
    }
  }
}
