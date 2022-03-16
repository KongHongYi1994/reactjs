import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App.js'; 
import Nav from './Nav.js';  
import Form from './Form.js';    
  
ReactDOM.render(<App />, document.getElementById('app'));  
ReactDOM.render(<Nav />, document.getElementById('nav'));  
ReactDOM.render(<Form />, document.getElementById('form'));  