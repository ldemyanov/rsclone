import { TTools } from '@src/constants/Draw';

interface IStyles {
  [prop: string]: string;
}

export default function getCursorStyle(styles: IStyles, triknesses: number, tool: TTools | null) {
  const style = ['cursor'];

  switch (tool?.constructor.name) {
    case 'Pencil':
      style.push('Pencil');
      break;
    case 'Eraser':
      style.push('Eraser');
      break;
    case 'Rect':
      style.push('Rectangle');
      break;
    case 'Circle':
      style.push('Circle');
      break;
    case 'Line':
      style.push('Line');
      break;
    case 'Pipette':
      style.push('Pipette');
      break;
  }

  if (tool?.constructor.name !== 'Pipette') {
    switch (triknesses) {
      case 4:
        style.push('4');
        break;
      case 8:
        style.push('8');
        break;
      case 12:
        style.push('12');
        break;
      case 16:
        style.push('16');
        break;
      case 20:
        style.push('20');
        break;
    }
  }

  return styles[style.join('')];
}
