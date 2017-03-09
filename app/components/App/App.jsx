import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import MembersPage from '../MembersPage/MembersPage';
import ARPage from '../ARPage/ARPage';
import CreditsPage from '../CreditsPage/CreditsPage';

import './App.scss';

// TODO: calendar page

export default () => (
  <BrowserRouter>
    <div>
      <Header />

      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/members" component={MembersPage} />
      <Route path="/augmented-reality" component={ARPage} />
      <Route path="/credits" component={CreditsPage} />

      <Footer />
    </div>
  </BrowserRouter>
);
