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

import Routes from './pages/Routes.jsx';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes store={store}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);