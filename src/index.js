import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { ProjectProvider } from './context/ProjectContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ProjectProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProjectProvider>
  </React.StrictMode>
);

