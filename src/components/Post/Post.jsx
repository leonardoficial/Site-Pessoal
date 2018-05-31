import React, { Component } from "react"

import "./Post.css"

class Post extends Component {
  render() {
    return(
    
      <div class="row post-item-line">
    
        <div class="col-sm-4 post-image-holder">
          <img src={ this.props.src } />
        </div>
        
        <div class="col-sm-8 post-body">
          <div class="post-title">
            { this.props.title }
          </div>
          <div class="post-holder">
            { this.props.children }
          </div>
          <div class="post-info">
            <span class="fa fa-clock-o" /> 12 minutos
          </div>
          
        </div>
      </div>
    )
  }
}

export default Post