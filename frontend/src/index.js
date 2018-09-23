// import React from 'react';
// import ReactDOM from 'react-dom';
// import Index from './pages/index';
// ReactDOM.render(<Index />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store';
// import { App } from 'apps/App';

import Index from './pages/index';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Index store={store}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);