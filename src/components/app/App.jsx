import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeContext from '../ThemeContext';
import AllQuotes from '../../containers/AllQuotes';
import ByCharacterQuotes from '../../containers/ByCharacterQuotes';
import Header from './Header';

export default function App() {
  const [theme, setTheme] = useState('light');
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AllQuotes} />       
          <Route exact path="/quotes/:character" 
            component={ByCharacterQuotes} />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}
