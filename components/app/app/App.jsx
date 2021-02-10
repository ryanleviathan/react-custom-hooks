import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import CharacterDetail from '../containers/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />       
        <Route exact path="/:character" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
