import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StyledCompoents from './components/StyledCompoents';
import Emotion from './components/Emotion';
import BasicRouter from './BasicRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StyledCompoents />
    <Emotion />
    <BasicRouter />
  </React.StrictMode>
);