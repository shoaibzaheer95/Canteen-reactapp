import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './bootstrap.min.css';
import './index.css';
import './canteen.css'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
   
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


