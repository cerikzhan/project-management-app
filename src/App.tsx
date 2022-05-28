import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { Provider } from 'react-redux';
import { store } from './store/store';
import ErrorHandler from './components/ErrorHandler';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: React.FC = () => {
  initTranslation('en');
  return (
    <Provider store={store}>
      <ErrorHandler>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <Header />
            <div className="container">
              <div className="page">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signin" element={<Login />} />
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
            </div>
            <Footer />
          </BrowserRouter>
        </DndProvider>
      </ErrorHandler>
    </Provider>
  );
};

export default App;
