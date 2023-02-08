import { FC } from 'react';
import { Button, ButtonText } from '@components/UI/Button';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@src/redux/store';
import styles from './styles.module.css';
import { getRoom } from '@src/api';
import { redirect, useSearchParams } from 'react-router-dom';
import { setPlayers } from '@src/redux/reducers/lobbyReducer';
import useSocket from '@src/api/useSocket';

export const FooterAuthorization: FC = () => {

  const [ searchParams ] = useSearchParams();
  const { connect } = useSocket();
  const { name, icon } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const join = async () => {
    const roomId = searchParams.get("roomId") ?? ''; 
    const res = await getRoom(name, icon, roomId);
    dispatch(setPlayers(res.users));
    console.log(res);
    connect(res.roomId);
  }

  return (
    <footer className={styles.wrapper}>
      <Button text={ButtonText.start} onClick={join} />
    </footer>
  );
};
