import React, { Component } from "react"

import "./ImageQuote.css"

import Quote from "../Quote/Quote.jsx"

class ImageQuote extends Component {

  render() {
    return(
      <div class="card image-quote">
        <img src={ this.props.imageurl } />
        <div class="card-body">
          <Quote author={ this.props.author }>
            { " " + this.props.children }
          </Quote>
        </div>
        <div class="card-info">
          <span class="fa fa-lg fa-heart-o" />
          <span class="card-share">
            <span class="fa fa-lg fa-facebook-square"  />
            <span class="fa fa-lg fa-google-plus-square" />
            <span class="fa fa-lg fa-twitter-square"     />
          </span>
        </div>
      </div>
    )
  }
}

export default ImageQuote