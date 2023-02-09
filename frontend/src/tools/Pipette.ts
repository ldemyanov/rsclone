import { TCanvasElement } from '@src/types';
import Tool from './Tool';
import getCanvasMousePosition from '@src/helpers/getCanvasMousePosition';
import { ICanvasMousePosition } from '@src/helpers/getCanvasMousePosition';

interface IPipette {
  isMouseDown: boolean;
  listen: () => void;
  onMouseDownHandler: (event: MouseEvent) => void;
  onMouseUpHandler: (event: MouseEvent) => void;
  onMouseMoveHandler: (event: MouseEvent) => void;
}

export default class Pipette extends Tool implements IPipette {
  public isMouseDown;

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
    if (this.canvas) {
      this.isMouseDown = true;
      this.getColor(getCanvasMousePosition(event, this.canvas));
    }
  }

  public onMouseUpHandler() {
    this.isMouseDown = false;
  }

  public onMouseMoveHandler(event: MouseEvent) {
    if (this.isMouseDown && this.canvas) {
      this.getColor(getCanvasMousePosition(event, this.canvas));
    }
  }

  public onMouseLeaveHandler() {
    this.isMouseDown = false;
  }

  public getColor({ xCoordinate, yCoordinate }: ICanvasMousePosition) {
    const imageData = this.ctx.getImageData(xCoordinate, yCoordinate, 1, 1).data;
    console.log(imageData[0], imageData[1], imageData[2], imageData[3]);
  }
}
