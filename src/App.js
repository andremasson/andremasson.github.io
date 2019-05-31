import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() => <MainPage />} />
      <Route path='/privacy_policy' exact render={() => <PrivacyPolicy />} />
    </div>
  );
}

export default App;
