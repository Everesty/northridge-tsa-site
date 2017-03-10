import React from 'react';
import { Link, Route } from 'react-router-dom';

import AboutNorthridgePage from './AboutNorthridgePage';
import AboutClubPage from './AboutClubPage';

import './AboutPage.scss';

const AboutPage = () => (
  <div id="AboutPage">
    <section className="about-section northridge">
      <Link to="/about/northridge">
        <div>
          <span className="section-name">Northridge</span>
          <span className="action-call">&gt;</span>
        </div>
      </Link>
    </section>
    <section className="about-section tsa">
      <Link to="/about/tsa">
        <div>
          <span className="action-call">&lt;</span>
          <span className="section-name">Technology Student Association</span>
        </div>
      </Link>
    </section>
  </div>
);

export default () => (
  <div>
    <Route path="/about/tsa" component={AboutClubPage} />
    <Route path="/about/northridge" component={AboutNorthridgePage} />
    <Route exact path="/about" render={AboutPage} />
  </div>
);
