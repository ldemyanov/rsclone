import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import { routes } from './routes';
import './App.module.css';
import { Link } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {routes.map((route) => (
            <li>
              <Link key={route.id} to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
