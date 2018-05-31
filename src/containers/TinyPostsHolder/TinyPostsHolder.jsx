import React, { Component } from "react"
import { render } from "react-dom"

import "./TinyPostsHolder.css"

import TinyPost from "../../components/TinyPost/TinyPost.jsx"

import { TinyPosts as data } from "../../utils/mock-data"


class TinyPostsHolder extends Component {

  render() {
  
    return(
      <div class="tiny-posts-holder">
        
        <div class="row">     
          
          <div class="col-6">
            <TinyPost src={ data[0].imageurl }>
              { data[0].title }
            </TinyPost>
          </div>
          
          <div class="col-6">
            <TinyPost src={ data[1].imageurl }>
              { data[1].title }
            </TinyPost>
          </div>
                
        </div>
                
        <div class="row">     
                
          <div class="col-6">
            <TinyPost src={ data[2].imageurl }>
              { data[2].title }
            </TinyPost>
          </div>
          
          <div class="col-6">
            <TinyPost src={ data[3].imageurl }>
              { data[3].title }
            </TinyPost>
          </div>
                
        </div>
      </div>
    )
  }
}

export default TinyPostsHolder