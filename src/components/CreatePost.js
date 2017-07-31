import React, {Component} from 'react';


export default class CreatePost extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      title: '',
      blog: ''
    };
    this._addToList = this._addToList.bind(this);
    this._handleName = this._handleName.bind(this);
    this._handleTitle = this._handleTitle.bind(this);
    this._handleBlog = this._handleBlog.bind(this);
  }

_handleName(event){
  this.setState({
    name: event.target.value
  });
}

_handleTitle(event){
  this.setState({
    title: event.target.value
  });
}

_handleBlog(event){
  this.setState({
    blog: event.target.value
  });
}


_addToList(event){
  event.preventDefault();
  let listItem = JSON.stringify(this.state);
  // console.log('listItem', listItem);

  fetch("https://tiny-lasagna-server.herokuapp.com/collections/bloggerannie/", {
    method: "POST",
    body: listItem,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    console.log(response, "yay");
  }).catch(err => {
    console.log(err, "boo");
  });
  this.setState({name: '', title: '', blog: ''});
}


  render(){
    return(
      <div className="form-group">
        <form onSubmit={this._addToList}>
          <div>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={this._handleName}/>
          </div>

          <div>
            <label>Title</label>
            <input type="text" value={this.state.title} onChange={this._handleTitle}/>
          </div>

          <div>
            <label>Write your blog..</label>
            <input type="textarea" value={this.state.blog} onChange={this._handleBlog}/>
          </div>

          <input type="submit"/>

        </form>
      </div>
    );
  }
}
