import React from 'react';
import ReactDOM from 'react-dom';

// import styles
import './styles/index.css';

// import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import components
import App from './components/App.js';
import CreatePost from './components/CreatePost.js';
import PostList from './components/PostList.js';
import ShowPost from './components/ShowPost.js';
import BaseLayout from './components/BaseLayout.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/createpost" component={CreatePost} />
        <Route path="/postlist" component={PostList} />
        <Route path="/showpost" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
   document.getElementById('root')
 );

registerServiceWorker();
