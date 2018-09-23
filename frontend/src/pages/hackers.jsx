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

          <h1>Hackers</h1>

          <video controls
                 muted
                 src="hackers.mp4"
                 width="300"
                 height="200">
              Sorry, your browser doesn't support embedded videos.
          </video>          

          <img src="mockup.png" className="centered"/>
          {/*
            <div style={{color:"white"}} onKeyDown={ this.nextHandler}>On Keydown Handler</div>
            <input onKeyDown={ this.nextHandler}/>
          */}




          <video autoplay muted loop id="myVideo">
            <source src="hackers.mp4" type="video/mp4"/>
          </video>

          <div class="content">
            <h1>Heading</h1>
            <p>Lorem ipsum...</p>
            <button id="myBtn" onclick="myFunction()">Pause</button>
          </div>


        </div>
    );
  }
}

export default PageLanding;
