import { getRoom } from "@src/api";
import useSocket from "@src/hooks/useSocket";
import { setPlayers } from "@src/redux/reducers/lobbyReducer";
import { RootState } from "@src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const useAnonymousLogin = () => {

  const [searchParams] = useSearchParams();
  const { connect } = useSocket();
  const { name, icon } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const login = async () => {
    const roomId = searchParams.get("roomId") ?? '';
    const res = await getRoom(name, icon, roomId);
    dispatch(setPlayers(res.users));

    const selfId = res.users.find((user) => user.name === name)?.userId;
    if (selfId) {
      connect(res.roomId, selfId);
    } else {
      // Are Maybe to throw error?
    }
  }

  return login;
}