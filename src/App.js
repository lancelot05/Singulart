import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import Artists from './components/Artists';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInPage} exact />
        <Route path='/signup' component={SignUpPage} exact />
        <Route path='/artists' component={Artists} exact />
      </Switch>
    </Router>
  );
}

export default App;
