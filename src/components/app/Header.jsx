import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './Theme';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Toolbar />
        <Link to={'/'}>
          <button>home</button>
        </Link>
        <h1>Futurama Characters!</h1>
      </header>
    );
  }
}
