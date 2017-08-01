import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="navBar">

        <div>
          <button>
            <NavLink className="homeLink" to="/">
              Home
            </NavLink>
          </button>
        </div>

          <div>
            <button>
              <NavLink className="createLink" to="/createpost">
                Create Post
              </NavLink>
            </button>
          </div>

          <div>
            <button>
              <NavLink className="listLink" to="/postlist">
                Posts
              </NavLink>
            </button>
          </div>

        </div>
      </div>
    );
  }
}
