import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (

        <div className="footer">
          <div>Created by Uncle buncle</div>
          <div>{this.props.name}</div>
        </div>
    );
  }
}

export default Footer;
