import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/styles.scss'
import './styles/flaticon/flaticon.css'



//import MyComponent from './playground/MyComponent'
//import PlayCollapse from './playground/PlayCollapse'
//import PlayMenu from './playground/PlayMenu'
//import PlayNavbar from './playground/PlayNavbar'
//import PlayForm from './playground/PlayForm'
import PlayTable from './playground/PlayTable'

ReactDOM.render(<PlayTable />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
