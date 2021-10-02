import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import store from './app/Store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <SnackbarProvider  autoHideDuration={1500}  maxSnack={2} anchorOrigin={{vertical:'bottom',horizontal:'right'}}>
    <App /> 
    </SnackbarProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
