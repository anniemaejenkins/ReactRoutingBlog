import React, {Component} from 'react';

import { Link } from 'react-router-dom';

export default class PostList extends Component{
  constructor(props){
    super(props);
    this.state = {
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
    console.log('props', this.props);
    let posts = this.state.posts.map((post, index) => {
      return (
        <div className="listTitle" key={ index }>
          <Link to={`${this.props.match.url}/${post._id}`}>{post.title}</Link>
        </div>
      )
    })
    return(
      <div className="list">
        <h1>Here are all the posts so far!</h1>
        {posts}
      </div>
    )
  }
}
