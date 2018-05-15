import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';

import {devs} from './devs.js';

ReactDOM.render(
    <div>
        <Card id={devs[0].id} name={devs[0].name} github={devs[0].github} />
        <Card id={devs[1].id} name={devs[1].name} github={devs[1].github} />
    </div>,
                document.getElementById('root'));
registerServiceWorker();
