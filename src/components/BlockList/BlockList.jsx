import React, { Component } from "react"

import "./BlockList.css"

class BlockList extends Component {
  render() {
  
    const blocks = this.props.list.map((block) => {
      return(
        <a href={ block.link } class="list-group-item">
          <div class="dot"/> { block.title }
        </a>
      );
    });
  
    return(
      <div class="card block-list">
        <div class="card-header"> { this.props.title } </div>
        <div class="list-group"> 
          { blocks }
        </div>
      </div>
    )
  }
}

export default BlockList