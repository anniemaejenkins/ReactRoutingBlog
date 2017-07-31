import React, {Component} from 'react';

import Navigation from './Navigation.js';
import CreatePost from './CreatePost.js';
import PostList from './PostList.js';


export default class BaseLayout extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
