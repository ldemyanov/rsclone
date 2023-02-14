import { getRoom } from '@src/api';
import useSocket from '@src/hooks/useSocket';
import { setPlayers, setRoomID, setSelfData } from '@src/redux/reducers/lobbyReducer';
import { RootState } from '@src/redux/store';
import { useAppSelector, useAppDispatch } from '@src/redux/store';
import { IPlayer } from '@src/types';
import { useSearchParams } from 'react-router-dom';

export const useAnonymousLogin = () => {
  const [searchParams] = useSearchParams();
  const { connect } = useSocket();
  const { name, icon } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const login = async () => {
    if (name) {
      // Need to do validation name

      const roomId = searchParams.get('roomId') ?? '';
      const res = await getRoom(name, icon, roomId);

      dispatch(setPlayers(res.users));
      dispatch(setRoomID(res.roomId));

      const { userId, main } = res.users.find((user) => user.name === name) as IPlayer;

      if (userId) {
        dispatch(setSelfData({ userId, main }));
        connect(res.roomId, userId);
      } else {
        // Are Maybe to throw error?
      }
    }
  };

  return login;
};
