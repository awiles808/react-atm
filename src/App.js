import React, { Component } from 'react';
import logo from './ga.png';

import Account from './Account';

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Pieces Of I Owe You</div>
        </div>
        <Account name="Checking" />
        <Account name="Savings"/>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
