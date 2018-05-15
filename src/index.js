import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';

import {devs} from './devs.js';

ReactDOM.render(
    <div>
        <CardList devs={devs}/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
