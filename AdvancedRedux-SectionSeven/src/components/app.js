import React, { Component } from 'react';

import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        {this.props.children}
      </div>
    );
  }
}
