import React from 'react';

import './CreditsPage.scss';

import creditsSource from '../../../CREDITS.md';

export default () => (
  <div
    id="CreditsPage"
    className="content"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: creditsSource }}
  />
);
