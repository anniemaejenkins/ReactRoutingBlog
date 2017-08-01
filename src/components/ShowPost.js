import React, {Component} from 'react';

export default class ShowPost extends Component{
  constructor(props){
    super(props);
    this.state = {
      post: {}
    };
  }
  // do a fetch of the posts and use .find to return single object that matches the url id
  componentDidMount(){
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/bloggerannie/").then(results => {
      return results.json();
    }).then(data => {
      // use .find on the data array to return the object you want
      let post = data.find((item)=>{
        return item._id === this.props.match.params.id
      });
      console.log("post", post);
      // then set state
      this.setState({post});
    });
  }

    render(){
      // console.log('mady', this.props.match.params.id);
    return(
      <div className="showPost">
        <h1>Post Details</h1>
        <p>Name: {this.state.post.name}</p>
        <p>Title: {this.state.post.title}</p>
        <p>Blog post: {this.state.post.blog}</p>
      </div>
    );
  }

}
