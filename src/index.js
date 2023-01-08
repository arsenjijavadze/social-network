import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//* data posts
let posts = [
  { id: 1, message: 'Hi, how are you? smth', likesCount: 12 },
  { id: 2, message: 'It\'s my first post', likesCount: 11 },
  { id: 3, message: 'bla bla', likesCount: 1 },

]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
