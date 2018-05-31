import React, { Component } from "react"

class Quote extends Component {
  render() {
    return(
      <div class="quote">
        <span class="quote-mark fa fa-quote-left" />
          { this.props.children }
        <span class="quote-author"> — { this.props.author }</span>
      </div>
    )
  }
}

export default Quote