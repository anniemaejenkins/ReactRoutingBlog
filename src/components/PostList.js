import React, {Component} from 'react';

import ShowPost from './ShowPost.js';

export default class PostList extends Component{
  constructor(props){
    super(props);
    this.state ={
      posts: []
    };

  }

  // componentdidmount then fetch
  // state be empty array then map over state

  componentDidMount(){
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/bloggerannie/").then(results => {
      return results.json();
    }).then(data => {
      this.setState({posts: data});
      console.log("state", this.state.posts);
    });
  }
  render(){
    let posts = this.state.posts.map(function(post, index){
      return <ShowPost key={index} post={post} />
    })
    return(
      <div>
        <p>stuff</p>
        {posts}
      </div>
    )
  }
}
