import io, { Socket } from 'socket.io-client';
import { useAppDispatch } from '@src/redux/store';
import { setPlayer, removePlayer } from '@src/redux/reducers/lobbyReducer';
import { API_URL } from '../api';
import { IPlayer } from '@src/types';

let socket: null | Socket = null;

export default function useSocket() {

  const dispatch = useAppDispatch();

  return {
    connect: (roomId: string, selfId: string) => {
      socket = io(API_URL, {
        query: { roomId, userId: selfId }
      });

      socket.on("ROOM:JOIN", (user: IPlayer) => {
        dispatch(setPlayer(user));
      });

      socket.on("ROOM:LEFT", (userId: string) => {
        console.log("ROOM:LEFT", userId);
        dispatch(removePlayer(userId));
      })

      socket.on("ROOM:STATUS", (obj) => {
        console.log(obj)
      })
    },

    excludeUser: (userId: string) => {
      if (socket) {
        socket.emit("USER:EXCLUDE", userId)
      }
    },

    setStatus: (status: string) => {
      if (socket) {
        socket.emit("USER:SET_STATUS", status);
      }
    }
  }

}
