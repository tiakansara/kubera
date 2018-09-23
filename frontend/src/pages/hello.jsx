import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class PageLanding extends Component {


  nextHandler = () => {
    let {history} = this.props;
    history.push('/');
  }

  hideMe = (event) => {
    event.preventDefault();

    if (document.getElementById("mockup").style.display === "none") {
      document.getElementById("mockup").style.display = "block";
    } else {
      document.getElementById("mockup").style.display = "none";
    }
  }

  render() {

    return (
        <div className="Hello">
          <Link to='/'>Hello</Link>
          <a href="" onClick={ this.hideMe }>hideMe</a>
          <br/>
          <br/>

          <img src="mockup.png" className="centered" id="mockup"/>
          {/*
            <div style={{color:"white"}} onKeyDown={ this.nextHandler}>On Keydown Handler</div>
            <input onKeyDown={ this.nextHandler}/>
          */}
        </div>
    );
  }
}

export default PageLanding;
