import io, { Socket } from 'socket.io-client';
import { useAppDispatch } from '@src/redux/store';
import { setPlayer, removePlayer } from '@src/redux/reducers/lobbyReducer';
import { API_URL } from '../api';
import { IPlayer } from '@src/types';

let socket: null | Socket = null;

// TODO remove or rename and move to types
interface IWord {
  word: string,
  writerId: string
}

interface IWord2 extends IWord {
  painterId: string,
}

// TODO remove or rename and move to types
interface IGame {
  roomId: string,
  isGameStarted: boolean,
  gameStage: string,
}

interface IGame1 extends IGame {
  words: IWord[];
}

interface IGame2 extends IGame {
  words: IWord2[];
}

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

      socket.on("ROOM:START_GAME", (gameObj: IGame1) => {
        console.log("IGame1: ", gameObj);
      })

      socket.on("ROOM:SEND_WORDS", (gameObj: IGame2) => {
        console.log("IGame2: ", gameObj);
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
    },

    startGame: (req: { isGameStarted: boolean }) => {
      if (socket) {
        socket.emit("USER:START_GAME", req);
      }
    },

    sendWord: (wordObj: IWord) => {
      if (socket) {
        socket.emit("USER:SEND_WORD", wordObj)
      }
    }
  }
}



