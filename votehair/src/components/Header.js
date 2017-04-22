import React, { Component } from 'react';
import logo from './logo.png';


class Header extends Component {
  render() {
    // Styles in header defined

    const headerStyle = {
      background:'#77c',
      margin: '50px',
      padding:'0px',
      width:'300px',
      border: "0px solid #0a0"
    }

    return (
        <div >
          <img
            style={headerStyle}
            src={logo}
            alt="logo" />
          <div>{this.props.name}</div>
        </div>
    );
  }
}

export default Header;
