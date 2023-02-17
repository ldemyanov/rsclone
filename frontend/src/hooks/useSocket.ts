import io, { Socket } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@src/redux/store';
import { setPlayer, removePlayer, setStatusPlayer } from '@src/redux/reducers/lobbyReducer';
import { setIsGameStarted, setGameStage, setWords, setGameWord } from '@src/redux/reducers/gameReducer';
import { API_URL } from '../api';
import { IPlayer } from '@src/types';
import { routes } from '@src/routes';

let socket: null | Socket = null;

// TODO remove or rename and move to types
export interface IWord {
  word: string;
  writerId: string;
  isWriterReady?: boolean;
  img?: string;
  painterId?: string;
  isPainterReady?: boolean;
  response?: string;
  responserId?: string;
  isResponserReady?: boolean;
}

export interface IPicture {
  img: string;
  word: string;
  painterId: string;
  isPainterReady: boolean;
}

export interface IResult {
  response: string;
  responserId: string;
  isResponserReady: boolean;
}

// TODO remove or rename and move to types
export interface IGame {
  roomId: string;
  isGameStarted: boolean;
  gameStage: string;
  words: IWord[];
}

export default function useSocket() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [, , WritePage, DrawPage, GuessPage] = routes;

  return {
    connect: (roomId: string, selfId: string) => {
      socket = io(API_URL, {
        query: { roomId, userId: selfId },
      });

      socket.on('ROOM:JOIN', (user: IPlayer) => {
        dispatch(setPlayer(user));
      });

      socket.on('ROOM:LEFT', (userId: string) => {
        console.log('ROOM:LEFT', userId);
        dispatch(removePlayer(userId));
      });

      socket.on('ROOM:STATUS', (obj) => {
        console.log(obj);
        dispatch(setStatusPlayer(obj));
      });

      socket.on('ROOM:START_GAME', (gameObj: IGame) => {
        console.log('START_GAME: ', gameObj);
        dispatch(setIsGameStarted(gameObj.isGameStarted));
        dispatch(setGameStage(gameObj.gameStage));
        dispatch(setWords(gameObj.words));
        navigate(WritePage.path);
      });

      socket.on('ROOM:SEND_WORDS', (gameObj: IGame) => {
        console.log('SEND_WORDS: ', gameObj);
        dispatch(setGameStage(gameObj.gameStage));
        dispatch(setWords(gameObj.words));
        setTimeout(() => navigate(DrawPage.path), 500);
      });

      socket.on('ROOM:SEND_ONE_WORD', (wordObj: IWord) => {
        console.log('SEND_ONE_WORD', wordObj);
        dispatch(setGameWord(wordObj));
      });

      socket.on('ROOM:SEND_ONE_PICTURE', (wordObj: IWord) => {
        console.log('SEND_ONE_PICTURE', wordObj);
      });

      socket.on('ROOM:SEND_PICTURES', (wordObj: IGame) => {
        console.log('SEND_PICTURES', wordObj);
        setTimeout(() => navigate(GuessPage.path), 500);
      });

      socket.on('ROOM:SEND_ONE_RESULT', (wordObj: IWord) => {
        console.log('SEND_ONE_RESULT', wordObj);
      });

      socket.on('ROOM:SEND_RESULTS', (wordObj: IGame) => {
        console.log('SEND_RESULTS', wordObj);
      });
    },

    excludeUser: (userId: string) => {
      if (socket) {
        socket.emit('USER:EXCLUDE', userId);
      }
    },

    setStatus: (status: string) => {
      if (socket) {
        socket.emit('USER:SET_STATUS', status);
      }
    },

    startGame: (req: { isGameStarted: boolean }) => {
      if (socket) {
        socket.emit('USER:START_GAME', req);
      }
    },

    sendWord: (wordObj: IWord) => {
      if (socket) {
        socket.emit('USER:SEND_WORD', wordObj);
      }
    },

    sendImage: (wordObj: IPicture) => {
      if (socket) {
        socket.emit('USER:SEND_PICTURE', wordObj);
      }
    },

    sendResult: (wordObj: IResult) => {
      if (socket) {
        socket.emit('USER:SEND_RESPONSE', wordObj);
      }
    },
  };
}
