import React, { Component } from "react"

import "./MainPost.css"

import { MainPost as data } from "../../utils/mock-data"

class MainPost extends Component {

  render() {
  
    return(
      <div class="row main-post"> 
      
       {/* <div class="col-sm-2"> 
          <div class="list-group">
            <a href="#" class="list-group-item">Category 1</a> 
            <a href="#" class="list-group-item">Category 2</a>
            <a href="#" class="list-group-item">Category 3</a> 
          </div>
        </div> */}
        
        <div class="col-sm-8 img-holder">
          <img src={ data.imgurl } />
        </div>
        
        <div class="col-sm-4 post-body">
          <p class="post-info">
            <span class="fa fa-clock-o" /> { data.time }
          </p>
          <h5 class="card-title"> { data.title } </h5>
          <p class="card-text">   { data.body }  </p>
        </div>
        
      </div>
    )
  }
}


export default MainPost
