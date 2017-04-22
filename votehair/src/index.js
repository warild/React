import React from 'react';  // JSX
import {render} from 'react-dom';
//import Home from './pages/home/Home';
import App from './pages/App';
import './index.css';
import { Router, Route} from 'react-router';

// reading this page agan and again, checking the url and displays accordingly
// More components

render(
  <div>
  <div>Router fungere som en switch: Den Link som er valgt et sted blir gjenfunnet her. Componenten vises her </div>
    <Router>
      <Route path="/" component={App}/>

    </Router>
    <h1>---</h1>
</div>

, document.getElementById('root')
);
