import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import WebFont from 'webfontloader';
import './index.css';
import App from './App';

WebFont.load({
  google: {
    families: ['Alegreya Sans SC', 'sans-serif','Amiri',
     'serif','Indie Flower', 'cursive','verdana',
     'Montserrat','Anton'
    ]
  }
});

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </React.StrictMode>
	,
	document.getElementById('root')
);
