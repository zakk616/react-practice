import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Banner(){
  return <img style={{width:"100%", height:"100px"}} src='https://png.pngtree.com/thumb_back/fh260/back_pic/03/76/42/2457beafd1a93ef.jpg' />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <App />
  </React.StrictMode>
);

reportWebVitals();
