import React, { Component } from "react"

import "./TopList.css"

class TopList extends Component {

  render() {
  
    const list = this.props.list.map((item) => {
      return(
        <a href={ item.link } class="list-group-item">
          <div class="dot"/> { item.title }
          <small>
            { item.body }
          </small>
        </a> 
      );
    });
  
    return(
      <div class="card top-list">
        <h5 class="card-header">{ this.props.title }</h5>
        <div class="list-group"> 
          { list }
        </div>
      </div>
    )
  }
}

export default TopList