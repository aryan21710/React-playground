import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './components/reportWebVitals';
import {FetchGitHubRepo} from './components/FetchGitHubRepo';
import {Aggrid} from './components/Aggrid'
import {OuterContainer} from './components/MaterialUISample/OuterContainer'
import {SearchableDropDown} from './components/SearchableDropDown';
ReactDOM.render(
  <React.StrictMode>
    <SearchableDropDown />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
