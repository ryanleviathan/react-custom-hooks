import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../app/history';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to={history.goBack()}>
          <button>back</button>
        </Link>
        <Link to={history.goForward()}>
          <button>forward</button>
        </Link>
        <Link to={'/'}>
          <button>home</button>
        </Link>
        <h1>Futurama Characters!</h1>
      </header>
    );
  }
}
