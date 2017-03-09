import React from 'react';
import { Link, Route } from 'react-router-dom';

import './AboutPage.scss';

const AboutClubPage = () => (
  <div id="AboutClubPage" />
);

const AboutNorthridgePage = () => (
  <div id="AboutNorthridgePage" />
);

export default () => (
  <div id="AboutPage">
    <Route path="/about/club" component={AboutClubPage} />
    <Route path="/about/northridge" component={AboutNorthridgePage} />
    <Route
      exact
      path="/about"
      render={() => (
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
      )}
    />
  </div>
);
