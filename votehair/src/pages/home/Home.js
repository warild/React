import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link} from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <Header name="Norge"/>

        <div>
           <h1>Home </h1>
           <ul className="header">
             <li><Link to="/">      Home      </Link></li>
             <li><Link to="/stuff"> Stuff     </Link></li>
             <li><Link to="/contact"> Contact </Link></li>
           </ul>

           <div className="content">
           // den som blir valgt vises her

           </div>
         </div>

        <Footer name="Norway"/>
      </div>
    );
  }
}


export default Home;
