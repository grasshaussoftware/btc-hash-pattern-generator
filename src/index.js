import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this file exists and has the Tailwind imports
import App from './App'; // App should have a default export
// reportWebVitals is optional and can be removed if not used
// import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Optional: reportWebVitals
// reportWebVitals(console.log);

