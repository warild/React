import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link} from 'react-router';
import Home from './home/Home';
import { Router, Route} from 'react-router';

class App extends Component {
  render() {
    return (

      <div>
       <div>
         <h1>App </h1>
         <ul className="header">
          <li><Link to="/">home</Link></li>
          <li><Link to="/stuff/stuff">Stuff</Link></li>
           <li><Link to="/contact">Contactxxvvv</Link></li>
         </ul>

        </div>
        router: Her plasseres den som er valgt
        <Router>
          <Route path="/stuff/stuff" component={Home}/>
          <Route path="/stuff" component={Home}/>
        </Router>
Etter router
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>

        <div className="content">
          //  {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
