import React from 'react';
import MarkdownIt from 'markdown-it';

import './CreditsPage.scss';

import creditsSource from '../../../CREDITS.md';

const md = new MarkdownIt();

export default () => (
  <div
    id="CreditsPage"
    className="content"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: md.render(creditsSource) }}
  />
);
