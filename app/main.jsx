import React from 'react';
import { render as reactRender } from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './components/App/App';

// The element to render the base react app into.
const rootElem = document.getElementById('root');

// Renders a given component into an AppContainer for preserving component states when hot
// reloading. ( •_•)          ( •_•)>⌐■-■          (⌐■_■)
const render = (Component) => {
  reactRender(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElem
  );
};

// Render the app the first time (and, possibly, only time).
render(App);

// Hot reloading voodoo-magic.
if (module.hot) {
  module.hot.accept('./components/App/App.jsx', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App/App.jsx').default;
    render(NextApp);
  });
}
