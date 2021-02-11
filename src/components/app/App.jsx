import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllQuotes from '../../containers/AllQuotes';
import ByCharacterQuotes from '../../containers/ByCharacterQuotes';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header, AllQuotes} />       
        <Route exact path="/:character" component={Header, ByCharacterQuotes} />
      </Switch>
    </Router>
  );
}
