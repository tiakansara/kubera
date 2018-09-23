import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './index.jsx'
import Hello from './hello.jsx'
import Hackers from './hackers.jsx'
import Data from './data.jsx'

class Routes extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Index }/>
          <Route exact path="/hello" component={ Hello }/>
          <Route exact path="/data" component={ Data }/>
          <Route exact path="/hackers" component={ Hackers }/>
          {/* <Redirect to="/404"/> */}
        </Switch>
      </div>
    );
  }
}

export default Routes;
