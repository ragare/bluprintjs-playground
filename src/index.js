import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import SetLocale from './playground/PlaySetNumeralLocale'

import './styles/styles.scss'
import './styles/flaticon/flaticon.css'
import PlayAppRouter from './playground/PlayAppRouter'

import './i18next'

SetLocale.setNumeral()

ReactDOM.render(<PlayAppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
