import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class PageLanding extends Component {


  nextHandler = () => {
    let {history} = this.props;
    history.push('/');
  }

  render() {

    return (
        <div className="Hackers">
          <Link to='/'>Hello</Link>

          <video autoPlay muted loop id="myVideo">
            <source src="hackers.mp4" type="video/mp4"/>
          </video>

          <div className="content">
            <Link to='/Hello'><h1 style={{color: 'rgba(11, 11, 11, 1)'}}>done</h1></Link>
          </div>


        </div>
    );
  }
}

export default PageLanding;
