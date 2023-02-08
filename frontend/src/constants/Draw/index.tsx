import { PencilSVG } from '@components/SVG/Pencil';
import { EraserSVG } from '@components/SVG/Eraser';
import { SquareSVG } from '@components/SVG/Square';
import { CircleSVG } from '@components/SVG/Circle';
import { LineSVG } from '@components/SVG/Line';
import { PipetteSVG } from '@components/SVG/Pipette';
import { UndoSVG } from '@components/SVG/Undo';
import { RedoSVG } from '@components/SVG/Redo';
import Pencil from '@src/tools/Pencil';
import Eraser from '@src/tools/Eraser';

export const CANVAS_WIDTH = 1920;
export const CANVAS_HEIGHT = 1080;

export const drawToolsArray = [
  { toolImg: PencilSVG, tool: Pencil },
  { toolImg: EraserSVG, tool: Eraser },
  { toolImg: SquareSVG, tool: Pencil },
  { toolImg: CircleSVG, tool: Pencil },
  { toolImg: LineSVG, tool: Pencil },
  { toolImg: PipetteSVG, tool: Pencil },
  { toolImg: UndoSVG, tool: Pencil },
  { toolImg: RedoSVG, tool: Pencil },
];

export type TTools = Pencil | Eraser;

export const triknesses = [4, 8, 12, 16, 20];
