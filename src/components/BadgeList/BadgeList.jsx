import React, { Component } from "react"

import "./BadgeList.css"

/*
const colors = [
  "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"
];*/

class BadgeList extends Component {

  render() {
  
    const Badges = this.props.list.map((cat) => {
    
      /*const color = colors[Math.floor(Math.random()*colors.length)];*/
    
      return (
        <span class="badge badge-light">{ cat }</span>
      );
    });
  
    return(
      <div class="badge-list">
        <div class="tags-group"> 
          { Badges }
        </div> 
      </div>
    )
  }
}

export default BadgeList