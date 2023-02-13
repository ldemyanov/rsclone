import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { MainLayout } from './layouts/mainLayout';
import { routes } from './routes';
import { Link } from 'react-router-dom';
import { RootState, store } from './redux/store';
import useSocket from './hooks/useSocket';

import styles from './App.module.css';

const App: FC = () => {
  const state = useSelector((state: RootState) => state);
  const { selfID } = useSelector((state: RootState) => state.lobby);
  const { excludeUser } = useSocket();
  console.log(state);
  console.log(selfID);

  useEffect(() => {
    return () => {
      excludeUser(selfID);
    };
  }, [selfID]);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.wrapper}>
          <nav>
            <ul style={{ display: 'flex', gap: '30px' }}>
              {routes.map((route) => (
                <li key={route.id}>
                  <Link key={route.id} to={route.path}>
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MainLayout>
            <main className={styles.main}>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.id} path={route.path} element={<route.element />} />
                ))}
              </Routes>
            </main>
          </MainLayout>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
