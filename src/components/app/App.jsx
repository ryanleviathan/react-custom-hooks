import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import AllQuotes from '../../containers/AllQuotes';
import ByCharacterQuotes from '../../containers/ByCharacterQuotes';
import Header from './Header';

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
    </ThemeProvider>
  );
}
