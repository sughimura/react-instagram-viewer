import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initFacebookSdk } from './_helpers/init-facebook-sdk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// NOTE: https://jasonwatmore.com/post/2020/10/28/react-facebook-how-to-use-the-facebook-sdk-in-a-react-app
initFacebookSdk().then();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
