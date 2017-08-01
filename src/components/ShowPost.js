import React, {Component} from 'react';


// do a fetch of the posts and use .find to return single object that matches the url id


export default class ShowPost extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }
  render(){
    return(
      <div>
        hey
      </div>
    );
  }
  componentDidMount(){
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/bloggerannie/").then(results => {
      return results.json();
    }).then(data => {
      this.setState({posts: data});
      console.log("state", this.state.posts);
    });
  }
}
