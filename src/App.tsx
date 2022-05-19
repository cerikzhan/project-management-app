import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Main from './pages/Main';
import Board from './pages/Board';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/scss/app.scss';
import initTranslation from './translation';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  initTranslation('ru');

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/boards" element={<PrivateRoute redirectTo="/" />}>
            <Route path="/boards" element={<Main />} />
          </Route>
          <Route path="/boards/:id" element={<PrivateRoute redirectTo="/" />}>
            <Route path="/boards/:id" element={<Board />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute redirectTo="/" />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
