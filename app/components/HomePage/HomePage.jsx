import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';

function scrollTo(name) {
  document.getElementsByName(name)[0].scrollIntoView();
}

const Virtue = ({ name, img }) => (
  <div onClick={() => scrollTo(name)}>
    <img src={img} alt={name} />
    <h4>{name}</h4>
  </div>
);
Virtue.propTypes = {
  name: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired
};

export default () => (
  <div id="HomePage">
    <section className="jumbo">
      Northridge TSA
    </section>

    <section className="content">
      <p>
        <Link to="/about/northridge">Northridge&apos;s</Link> TSA club is
        taking part in the&nbsp;
        <a href="http://tsaweb.org/High-School-Competitions">TSA Webmaster Competition!</a>
      </p>
    </section>

    <hr className="wide-divider" />

    <section className="content">
      <div className="virtues">
        <Virtue name="Ambition" img="/static/images/virtues/mountains.png" />
        <Virtue name="Reliability" img="/static/images/virtues/correct.png" />
        <Virtue name="Creativity" img="/static/images/virtues/paint-brush.png" />
      </div>

      <h2>Our Virtues</h2>
      <p>
        We, both as a club and as individuals, are always striving to be the
        best we can be. As such, we&apos;ve taken the time to outline three
        particular virtues that guide us in that direction:
      </p>

      <h3 name="Ambition">Ambition</h3>
      <p>
        Ambition marks a truly committed individual who is hard-working, be it
        on a regular basis or in specific instances.
      </p>

      <h3 name="Reliability">Reliability</h3>
      <p>
        Nobody likes it when someone they&apos;re counting on lets them down;
        to prevent this, it&apos;s almost expected that members can be reliable
        at all times for managing themselves and any duties they acceptingly
        take on.
      </p>
      <p>
        If a member ever finds that they themselves are being unreliable, they
        should take the blame for their mistakes just as equally as they would
        take credit for their inventions.
      </p>

      <h3 name="Creativity">Creativity</h3>
      <p>
        Although not as important as the other two, Creativity is still a very
        important quality to reach for, even on a daily basis.
      </p>
    </section>
  </div>
);
