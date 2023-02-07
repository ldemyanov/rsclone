const BASE_URL = 'https://librebay.com';

export const getRoom = async (name: string, imgId: number, roomId: number) => {

  const setRoomId = () => (roomId > 0 ? `&roomId=${roomId}` : '');

  const response = await fetch(
    `${BASE_URL}/room?name=${name}&imgId=${imgId}${setRoomId()}`,
  );

  return {
    obj: await response.json(),
  };
};