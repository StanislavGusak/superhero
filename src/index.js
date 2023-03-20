import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from './Context/ThemeProvider';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
