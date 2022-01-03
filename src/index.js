import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const youtube = new Youtube('12sf')
ReactDOM.render(
  <React.StrictMode>
    <App youtube={ youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);
