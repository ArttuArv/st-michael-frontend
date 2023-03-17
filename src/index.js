import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// Set title for the page
document.title = 'St Michael Irish Pub';

// Render the App component into the root element
ReactDOM.createRoot(
  document.getElementById('root'))
    .render(<App />);
