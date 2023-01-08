import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// data posts
let posts = [
  { id: 1, message: 'Hi, how are you? smth', likesCount: 12 },
  { id: 2, message: 'It\'s my first post', likesCount: 11 },
  { id: 3, message: 'bla bla', likesCount: 1 },

]

//data dialogs
let dialogs = [
  { id: 1, name: 'David' },
  { id: 2, name: 'Aleksandr' },
  { id: 3, name: 'Solomon' },
  { id: 4, name: 'Elisabeth' },
  { id: 5, name: 'Hanna' },
  { id: 6, name: 'Mark' },
]

// data message
let messages = [
  { id: 1, message: 'Hi, abs' },
  { id: 2, message: 'Follow the white rabbit' },
  { id: 3, message: 'Hello' },
  { id: 4, message: 'Hi' },
  { id: 5, message: 'Hi' },

]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
