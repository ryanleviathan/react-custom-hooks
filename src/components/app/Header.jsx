import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../ThemeContext';
import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <header bg={theme} variant={theme}>
        <Link to={'/'}>
          <button>home</button>
        </Link>
        <h1>Futurama Characters!</h1>
      </header>
    </>
  );
};

export default Header;
