import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import { routes } from './routes';
import './App.module.css';
import styles from './App.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

const App: FC = () => {
  const store = useSelector((store) => store);
  console.log(store);
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
