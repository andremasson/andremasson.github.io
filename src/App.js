import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import './App.css';
import MainPage from './MainPage';
import PrivacyPolicy from './PrivacyPolicy';

const history = createBrowserHistory({
  basename: '/andremasson/'
})

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route path='/' exact render={() => <MainPage />} />
        <Route path='/privacy_policy' exact render={() => <PrivacyPolicy />} />
      </Router>
    </div>
  );
}

export default App;
