import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import XyFlow from './pages/xyflow';
import Chat from './pages/chat';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
);
