import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

export default () => (
  <div id="Footer">
    <div>
      <div className="footer-box">
        <h5>
          <Link to="/about">About</Link>
        </h5>
        <ul>
          <li><Link to="/about/club">Club</Link></li>
          <li><Link to="/about/northridge">Northridge</Link></li>
          <li><Link to="/members">Members</Link></li>
        </ul>
      </div>
      <div className="footer-box">
        <h5>Cool Stuff</h5>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/augmented-reality">Augmented Reality</Link></li>
        </ul>
      </div>
      <div className="footer-box">
        <h5>
          <Link to="/credits">Credits</Link>
        </h5>
      </div>
      <div className="footer-box footer-icons">
        <h5>Find Us</h5>
        <a href="https://github.com/Everesty/northridge-tsa-site">
          <img src="/static/images/social_media/github_white_64.png" alt="GitHub Repository" />
        </a>
        <a href="https://www.facebook.com/nhsTSA/">
          <img src="/static/images/social_media/facebook_white_72.png" alt="Facebook Page" />
        </a>
      </div>
      <span>
        Created with ❤ by Calvin Watford, Dylan Buel, and Nathan Tymofichuk,&nbsp;
        <Link to="/credits">and other lovely creators.</Link>
      </span>
    </div>
  </div>
);
