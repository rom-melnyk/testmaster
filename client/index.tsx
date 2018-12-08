import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

(window as any).runTestmaster = () => {
  const destinationElement = document.getElementById('root');
  ReactDOM.render(<App />, destinationElement);
};
