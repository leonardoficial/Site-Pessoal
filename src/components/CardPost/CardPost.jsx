import React, { Component } from "react"

import "./CardPost.css"

export default class CardPost extends Component {
  render() {
    return(
      <div class="card card-post">
        <div class="card-img-top">
          <img src="./images/logo.png" />
        </div>
       <div class="card-body">
         <h5 class="card-title">my title</h5>
          <p class="card-text">my body text</p>
        </div>
      </div>
    );
  }
}