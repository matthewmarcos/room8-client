import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import LandingContainer from './containers/LandingContainer/LandingContainer';

import './index.css';

ReactDOM.render(
  <LandingContainer />,
  document.getElementById('root')
);
