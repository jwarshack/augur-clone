import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MoralisProvider} from 'react-moralis'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MoralisProvider appId={process.env.REACT_APP_MORALIS_APP_ID} serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}>
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
