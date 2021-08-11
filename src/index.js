import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const element = React.createElement('h1', null, 'Hello World');

console.log(element);

const element2 = <h1>Hello World </h1>;

console.log(element2);

function getGreeting(user) {
    if (user) {
        return <h2>Hello {user} </h2>;
    }
    return <h1>Hello, Stranger</h1>;
}

const element3 = <h1>Hello {getGreeting('Mr Mostafij')}</h1>;
console.log(element3);

const element4 = (
    <h1 className="heading" tabIndex="index">
        <span className="text"> Hello World</span>
        <img src="" alt="IMG" />
    </h1>
);

/*
element4 = {
    type : 'h1',
    props:{
        className: 'heading',
        tabIndex: 0,
        children: [
            {
                type:'span',
                props:{
                    className:'text',
                }
            },
            {
                type:'img'
                props:{
                    src:''
                }
            }
        ]
    },
}
*/
console.log(element4);
const element5 = (
    <h1 className="heading" tabIndex="index">
        <span className="text"> Hello World</span>
        <img src="" alt="IMG" />
    </h1>
);

console.log(element5);

ReactDOM.render(element5, document.getElementById('root'));
