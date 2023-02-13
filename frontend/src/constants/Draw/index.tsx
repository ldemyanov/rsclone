import { PencilSVG } from '@components/SVG/Pencil';
import { EraserSVG } from '@components/SVG/Eraser';
import { SquareSVG } from '@components/SVG/Square';
import { CircleSVG } from '@components/SVG/Circle';
import { LineSVG } from '@components/SVG/Line';
import { PipetteSVG } from '@components/SVG/Pipette';
import Pencil from '@src/tools/Pencil';
import Eraser from '@src/tools/Eraser';
import Rect from '@src/tools/Rect';
import Circle from '@src/tools/Circle';
import Line from '@src/tools/Line';
import Pipette from '@src/tools/Pipette';

export const CANVAS_WIDTH = 1920;
export const CANVAS_HEIGHT = 1080;

export const drawToolsArray = [
  { toolImg: PencilSVG, tool: Pencil },
  { toolImg: EraserSVG, tool: Eraser },
  { toolImg: SquareSVG, tool: Rect },
  { toolImg: CircleSVG, tool: Circle },
  { toolImg: LineSVG, tool: Line },
  { toolImg: PipetteSVG, tool: Pipette },
];

export type TTools = Pencil | Eraser | Rect | Circle | Line | Pipette;

export const triknessesValues = [4, 8, 12, 16, 20];
