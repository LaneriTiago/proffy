import React from 'react';
import './assets/styles/global.css';
import logoImg from './assets/images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={logoImg} alt=""/>
        </div>
      </div>
    </div>
  );
}



export default App;
