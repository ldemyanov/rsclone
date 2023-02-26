import { ContentBorder } from '@components/UI/ContentBorder';
import styles from './styles.module.css';
import { FC, Fragment } from 'react';
import { useAppSelector } from '@src/redux/store';
import { checkStrsEqual } from '@src/utils/checkStrsEqual';
import greenTick from "@assets/images/green-tick.png";
import { Button } from '@components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '@src/routes';

const mockWords = [
  {
    word: "Choco Pie",
    img: "http://localhost:5000/img/image1676636400971.png",
    response: "Choco Pie",
  },
  {
    word: "Pizza",
    img: "http://localhost:5000/img/image1676636816533.png",
    response: "123"
  },
  {
    word:"Car",
    img:"http://localhost:5000/img/image1676637169461.png",
    response:"123",
  },
  {
    word:"House",
    img:"http://localhost:5000/img/image1676637291819.png",
    response:"123",
  },
  {
    word:"Ant",
    img:"http://localhost:5000/img/image1676637785308.png",
    response:"123",
  },
]

const mockIcon = "http://localhost:3000/static/media/killer_whale.7db01c230b09e89c02fe.png"
const mockName = "Leo"

export const SoloResultsPage: FC = () => {
  const { icon, name } = useAppSelector((state) => state.auth);
  const { words } = useAppSelector((state) => state.game.game);
  const navigate = useNavigate();
  const LobbyPage = routes[1];

  return (
    <ContentBorder>
      <div className={styles.container}>
        <div className={styles.content}>
            {mockWords.map((w, i) =>
              <Fragment>
                <div className={`${styles.req} ${styles.appearNow}`}>
                  <img className={styles.reqImg} src={w.img} alt="123" />
                  <div className={styles.reqWord}>{w.word}</div>
                </div>
                <div className={`${styles.messageBlock} ${styles.appearNow}`}>
                  <div className={styles.message}>
                    <h4 className={styles.name}>{mockName}</h4>
                    <div className={styles.text}>
                      {w.response}
                      {checkStrsEqual(w.response as string, w.word) &&
                        <img className={styles.greenTick} src={greenTick} alt='green tick'/>}
                    </div>
                  </div>
                  <div className={styles.circle}>
                    <img className={styles.icon} src={mockIcon} alt={`icon by ${mockName}`}></img>
                  </div>
                </div>
              </Fragment>
            )}
        </div>
      </div>
      <div className={styles.bottomRight}>
        <Button text='Return to Lobby' onClick={() => navigate(LobbyPage.path)}/>
      </div>
    </ContentBorder>
  );
};
