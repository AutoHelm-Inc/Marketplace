import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import {getStorage, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
import { getDatabase,  onValue, get, child, ref } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import { initalizeFirebase, downloadAhilFile, databaseGetEntry, databaseToJson, searchDatabaseProjects } from './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





