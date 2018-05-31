import React, { Component } from "react"

import "./MainHeader.css"

class MainHeader extends Component {

  render() {
    return(
      <div class="main-header row">
        <div class="image-holder col-12 col-sm-5">
          <img src="./images/header-logo.png" />
        </div>
        <div class="col-12 col-sm-7 icons-holder">
          <span class="fa fa-lg fa-facebook-square"    />
          <span class="fa fa-lg fa-google-plus-square" />
          <span class="fa fa-lg fa-twitter-square"     />
          <span class="fa fa-lg fa-youtube-square"     />
        </div>
      </div>
    )
  }
}

export default MainHeader