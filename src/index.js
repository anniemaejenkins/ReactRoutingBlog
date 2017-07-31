import React from 'react';
import ReactDOM from 'react-dom';

// import styles
import './styles/index.css';

// import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import components
import App from './components/App.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
