import React, { Component } from "react"

import "./JoinUs.css"

class JoinUs extends Component {
  render() {
    return(
      <div class="card join-us">
        <div class="card-image-holder">
          <img src="./images/logo.png" />
        </div>
        {/*
            /// BUG ///
            card-icon has a problem with its position adjusting while
            screen size scaling.
        */}
        <div class="card-icon fa fa-certificate" />
        <div class="card-body">
          <h5 class="card-title">
            <span class="fa fa-star" />
            JUNTE-SE A NÓS
            <span class="fa fa-star" />
          </h5>
          <p class="card-text">
            Se você tem um ponto de vista a mostrar ou deseja fazer parte de nossa
            organização, sendo um colaborador, saiba que você pode juntar-se a nós
            agora mesmo! {/*
            Fazendo parte de nossa equipe, você terá um espaço de edição
            na plataforma dedicado inteiramente a você, onde poderá fazer edições e 
            upload de textos, fotos e vídeos!
            */}
            <button class="btn btn-lg btn-block btn-outline-success">começar</button>
          </p>
        </div>
        <div class="card-footer"> <p>acompanhe novidades</p>
           <span class="fa fa-lg fa-facebook-official"  />
           <span class="fa fa-lg fa-google-plus-square" />
           <span class="fa fa-lg fa-twitter-square"     />
           <span class="fa fa-lg fa-youtube-play"       />
        </div>
      </div>
    );
  }
}

export default JoinUs

