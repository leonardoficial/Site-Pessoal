import React, { Component } from "react"
import $ from "jquery"
import "bootstrap/js/src/collapse"


import "./NavBar.css"

class NavBar extends Component {

  componentDidMount() {
    const $icon = $(".navbar-toggler .fa");
    
    $("#navbarResponsive").on("show.bs.collapse", () => {
      //$icon.hide();
    });
  }

  render() {
  
    const active = this.props.active;
  
    return(
    
      <nav class="navbar navbar-expand-sm fixed-top">
        <div class="container">
        
          <a class="navbar-brand" href="#">
            <span class="fa fa-bullhorn" /> O|E|P
          </a>
          
          <button class="navbar-toggler" data-toggle="collapse"
            data-target="#navbarResponsive" aria-expanded="false"
            navbar-label="Toggle navigation" aria-controls="navbarResponsive">
            <span class="fa fa-bars" />
          </button>
          
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class={ `nav-item ${ active == "novidades" ? "active" : "" }` }>
                <a class="nav-link" href="#">novidades</a>
              </li>
              <li class={ `nav-item ${ active == "galeria" ? "active" : "" }` }>
                <a class="nav-link" href="#">galeria</a>
              </li>
              <li class={ `nav-item ${ active == "redação" ? "active" : "" }` }>
                <a class="nav-link" href="#">redação</a>
              </li>
              <li class={ `nav-item ${ active == "sobre" ? "active" : "" }` }>
                <a class="nav-link" href="#">sobre</a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    )
  }
}

export default NavBar