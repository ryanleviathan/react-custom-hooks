import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/app/App';
import history from './components/app/history';

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
