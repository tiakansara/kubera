import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class PageLanding extends Component {


  nextHandler = () => {
    let {history} = this.props;
    history.push('/');
  }

  render() {

    return (
        <div className="Hello">
          <Link to='/'>Hello</Link>

          <img src="mockup.png" class="centered"/>
          {/*
            <div style={{color:"white"}} onKeyDown={ this.nextHandler}>On Keydown Handler</div>
            <input onKeyDown={ this.nextHandler}/>
          */}
        </div>
    );
  }
}

export default PageLanding;
