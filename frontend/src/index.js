import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from '@mui/material/styles';
import history from "./history";
import theme from "./theme";
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const app = (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-right"
      />
      <App />
    </ThemeProvider>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
