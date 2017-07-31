import React, {Component} from 'react';


export default class ShowPost extends Component{
  render(){
    console.log('');
    return(
      <div>
        <p>Name: {this.props.post.name}</p>
        <p>Title: {this.props.post.title}</p>
        <p>Blog: {this.props.post.blog}</p>
      </div>
    );
  }
}
