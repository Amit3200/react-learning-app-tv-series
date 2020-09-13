import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// const get_current_date = () =>{
//   const date=new Date();
//   return date.toDateString();
// }

// creting dom from react
// const greeting=React.createElement("h1",{},"hello! world");
// using jsx
// const greeting_jsx=<h1>Hello World!!!</h1>;
// using jsx parser to call js functions
// const greeting_jsx_1=<h1>Current Date : {get_current_date()}</h1>
// ReactDOM.render(greeting_jsx_1,document.getElementById('root'));



// axtual syntax
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
