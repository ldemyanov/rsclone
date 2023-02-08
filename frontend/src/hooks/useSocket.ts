import io, { Socket } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { setPlayer } from '@src/redux/reducers/lobbyReducer';
import { API_URL } from '../api';


export default function useSocket() {

  let socket: null | Socket = null;
  const dispatch = useDispatch();

  return {
    connect: (roomId: string) => {
      socket = io(API_URL, {
        query: { roomId }
      });

      socket.on("ROOM:JOIN", (user) => {
        dispatch(setPlayer(user));
      });
    },

    getSocket: () => {
      return socket;
    }
  }

}
