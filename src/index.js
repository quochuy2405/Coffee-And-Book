import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SnackbarProvider  autoHideDuration={1500}  maxSnack={2} anchorOrigin={{vertical:'top',horizontal:'right'}}>
    <App /> 
    </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
