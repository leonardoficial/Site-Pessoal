import React, { Component } from "react"

import "./TinyPost.css"

class TinyPost extends Component {
  render() {
    return(
      <div class="card tiny-post">
      
        <div class="card-image-holder">
          <img src={this.props.src} />
          <div class="black-opac" />
        </div>
        
        <div class="card-body">
            { this.props.children  }
        </div>
        
        {/*
        <div class="widget-info">
          <span class="fa fa-lg fa-heart-o" />
          <span class="widget-share">
            <span class="fa fa-lg fa-facebook-square"  />
            <span class="fa fa-lg fa-google-plus-square" />
            <span class="fa fa-lg fa-twitter-square"     />
          </span>
        </div>
        */}
        
      </div>
    )
  }
}

export default TinyPost