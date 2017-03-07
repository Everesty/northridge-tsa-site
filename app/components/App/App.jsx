import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';

import './App.scss';

export default () => (
  <BrowserRouter>
    <div>
      <Header />

      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
    </div>
  </BrowserRouter>
);
