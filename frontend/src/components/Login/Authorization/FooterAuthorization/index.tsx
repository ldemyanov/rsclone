import { FC } from 'react';
import { Button, ButtonText } from '@components/UI/Button';
import { useSelector } from "react-redux";
import { RootState } from '@src/redux/store';
import styles from './styles.module.css';
import { getRoom } from '@src/api';
import { useSearchParams } from 'react-router-dom';

export const FooterAuthorization: FC = () => {

  const [ searchParams ] = useSearchParams();
  const { name, imgId } = useSelector((state: RootState) => state.auth);

  const join = async () => {
    const roomId = Number(searchParams.get("roomId")) ;
    const res = await getRoom(name, imgId, roomId);
    console.log(res);
  } 

  return (
    <footer className={styles.wrapper}>
      <Button text={ButtonText.start} onClick={join} />
    </footer>
  );
};
