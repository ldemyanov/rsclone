import { IPlayer } from "@src/types";

export const API_URL = process.env.REACT_APP_API_URL ?? "http://localhost:5000";

interface IRoom {
  roomId: string,
  typeGame: string,
  users: IPlayer[],
}

type GetRoom = (name: string, icon: string, roomId: string) => Promise<IRoom>

export const getRoom: GetRoom = async (name, icon, roomId) => {

  const setRoomId = () => (roomId ? `&roomId=${roomId}` : '');

  const response = await fetch(
    `${API_URL}/room?name=${name}&icon=${icon}${setRoomId()}`,
  );

  return await response.json();
};