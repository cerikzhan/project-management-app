import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Main';
import Project from './pages/Board';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/scss/app.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import initTranslation from './translation';

const App: React.FC = () => {
  initTranslation('ru');
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </Provider>
  );
};

export default App;
