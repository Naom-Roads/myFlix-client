import React from 'react';
// import ReactDOM from 'react-dom'; this is not working for some reason
var ReactDOM = require('react-dom');

// Import statement to indicate that you need to bundle './index.scss'

import './index.scss';

// Main component (will eventually use all the others)

class MyFlixApplication extends React.component {
    render() {
        return (
            <div className="my-flix">
                <div>Good Morning</div>
            </div>
        );
    }
}

// Finds the root of your app

const container = document.getElementsByClassName('app-container')
[0];

// Tells React to render your app in the root
ReactDom.render(React.createElement(MyFlixApplication), container);