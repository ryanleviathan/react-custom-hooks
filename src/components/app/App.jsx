import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeContext from '../ThemeContext';
import { GlobalStyles } from '../global';
import AllQuotes from '../../containers/AllQuotes';
import ByCharacterQuotes from '../../containers/ByCharacterQuotes';
import Header from './Header';

export default function App() {
  const [theme, setTheme] = useState('light');
  const value = { theme, setTheme };

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      <Router>
        <GlobalStyles />
        <Header />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Switch>
          <Route exact path="/" component={AllQuotes} />       
          <Route exact path="/quotes/:character" 
            component={ByCharacterQuotes} />
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}
