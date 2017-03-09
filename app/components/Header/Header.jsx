import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { collapsed: false };

    this.mouseOver = false;

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onMouseEnter() {
    this.mouseOver = true;
    this.updateCollapsed();
  }

  onMouseLeave() {
    this.mouseOver = false;
    this.updateCollapsed();
  }

  onScroll() {
    this.updateCollapsed();
  }

  updateCollapsed() {
    if (!this.mouseOver && window.pageYOffset > document.getElementById('Header').clientHeight) {
      this.setState({ collapsed: true });
    } else {
      this.setState({ collapsed: false });
    }
  }

  render() {
    return (
      <div
        id="Header"
        className={this.state.collapsed ? ' collapsed' : ''}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="title">
          <Link to="/">Northridge TSA</Link>
        </div>

        <div className="navLinks">
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/members" activeClassName="active">Members</NavLink>
          <NavLink to="/augmented-reality" activeClassName="active">Augmented Reality</NavLink>
        </div>
      </div>
    );
  }
}
