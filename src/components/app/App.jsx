import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllQuotes from '../../containers/AllQuotes';
import ByCharacterQuotes from '../../containers/ByCharacterQuotes';
import Header from './Header';
import Toolbar, { ThemeContext } from './Theme';

export default function App() {
  return (
    <Router>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
      <Header />
      <Switch>
        <Route exact path="/" component={AllQuotes} />       
        <Route exact path="/quotes/:character" component={ByCharacterQuotes} />
      </Switch>
    </Router>
  );
}
