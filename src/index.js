import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './components/reportWebVitals';
import {FetchGitHubRepo} from './components/FetchGitHubRepo';
import {Aggrid} from './components/Aggrid'
import {OuterContainer} from './components/MaterialUISample/OuterContainer'
import {SearchableDropDown1} from './components/SearchableDropDown1';
import {SearchableDropDown2} from './components/SearchableDropDown2';
import {AutoPopulateEmailWhenTyped} from './components/AutoPopulateEmailWhenTyped'
ReactDOM.render(
  <React.StrictMode>
    <Aggrid />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
