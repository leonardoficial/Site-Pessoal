import React, { Component } from "react"

class SocialMedia extends Component {
  render() {
    return(
      <div class="card widget social-media">
        <h5 class="card-header">Social Medias</h5>
        <div class="widget-body"> 
          <span class="fa fa-lg fa-facebook-official"  />
          <span class="fa fa-lg fa-github-square"      />
          <span class="fa fa-lg fa-google-plus-square" />
          <span class="fa fa-lg fa-twitter-square"     />
          <span class="fa fa-lg fa-pinterest-square"   />
          <span class="fa fa-lg fa-youtube-play"       />
        </div>
      </div>
    )
  }
}

export default SocialMedia