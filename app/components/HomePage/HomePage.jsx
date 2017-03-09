import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';

// TODO: a thing that showcases our 3 attributes.

export default () => (
  <div id="HomePage">
    <section className="jumbo">
      Northridge TSA
    </section>

    <section className="content">
      <p>
        Here at <Link to="/about/northridge">Northridge High School,</Link> we
        like to do stuff.
      </p>
    </section>

    <hr className="wide-divider" />

    <section className="content">
      <div className="virtues">
        <div>
          <img src="/static/images/virtues/mountains.png" alt="Ambition" />
          <h4>Ambition</h4>
        </div>
        <div>
          <img src="/static/images/virtues/correct.png" alt="Respect" />
          <h4>Reliability</h4>
        </div>
        <div>
          <img src="/static/images/virtues/paint-brush.png" alt="Kindness" />
          <h4>Creativity</h4>
        </div>
      </div>
      <h2>Our Virtues</h2>
      <p>
        Something about virtues
      </p>
    </section>
  </div>
);
