import React from 'react';

import './ARPage.scss';

export default class ARPage extends React.Component {
  componentDidMount() {
    document.body.classList.add('augmented-reality');
  }

  componentWillUnmount() {
    document.body.classList.remove('augmented-reality');
  }

  render() {
    return (
      <div id="ARPage" />
    );
  }
}

/*
export default () => (
  <div id="ARPage" />
);
*/
