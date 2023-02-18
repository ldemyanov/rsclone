import { FC} from 'react';
import styles from './styles.module.css';

const altImg = "question picture"

interface PaintedImgProps {
  image: string;
}

export const PaintedImg: FC<PaintedImgProps> = ({image}) => {
  return (
    <img src={image} alt={altImg} />
  );
};
