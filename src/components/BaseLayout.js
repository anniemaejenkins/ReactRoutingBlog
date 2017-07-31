import React, {Component} from 'react';

import CreatePost from './CreatePost.js';
import PostList from './PostList.js';
import ShowPost from './ShowPost.js';



export default function BaseLayout(props){
  return(
    <div>
    <h3>BaseLayout Component</h3>
    <CreatePost />
    <PostList />
    <ShowPost />
    </div>
  );
}
