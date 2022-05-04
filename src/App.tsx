import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Header from './components/Header';
import './assets/scss/app.scss';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
