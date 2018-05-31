import React, { Component } from "react"

import "./Footer.css"

class Footer extends Component {

  render() {
    return(
      <footer class="footer py-5 bg-dark"> 
        <div class="container">
        
          <div class="row text-center">
            <div class="col-sm-6">
              <p style={{color: "white", fontWeight: "bold"}}>
                receba notificações
              </p>
              <div class="input-group block-center">
                <input placeholder="fulano@gmail.com" class="form-control" />
                <div class="input-group-append">
                  <button class="btn btn-outline-success">
                    <span class="fa fa-envelope-o" />
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card social-media">
                <h5 class="card-header">Mídias Sociais</h5>
                <div class="card-body"> 
                  <span class="fa fa-lg fa-facebook-official"  />
                  <span class="fa fa-lg fa-github-square"      />
                  <span class="fa fa-lg fa-google-plus-square" />
                  <span class="fa fa-lg fa-twitter-square"     />
                  <span class="fa fa-lg fa-pinterest-square"   />
                  <span class="fa fa-lg fa-youtube-play"       />
                </div>
              </div>
            </div>
          </div>
          
          <div class="row">
          
            <div class="col-6">
              <div class="list-group">
                <a href="#" class="list-group-item list-header">
                  sobre nós
                </a>
                <a href="#" class="list-group-item">
                  missão
                </a>
                <a href="#" class="list-group-item">
                  valores
                </a>
                <a href="#" class="list-group-item">
                  visão
                </a>
                <a href="#" class="list-group-item">
                  nossa equipe
                </a>
                <a href="#" class="list-group-item">
                  contribuidores
                </a>
                <a href="#" class="list-group-item">
                  trabalhe conosco
                </a>
              </div>
            </div>
            
            <div class="col-6">
              <div class="list-group">
                <a href="#" class="list-group-item list-header">
                  contato / ajuda
                </a>
                <a href="#" class="list-group-item">
                  FAQ
                </a>
                <a href="#" class="list-group-item">
                  contato
                </a>
                <a href="#" class="list-group-item">
                  suporte (conteúdo)
                </a>
                <a href="#" class="list-group-item">
                  suporte (plataforma)
                </a>
              </div>
            </div> 
          </div>
            
          <div class="row">
            <div class="col-12 text-center footer-copyright">
              <div class="list-group">
                <a href="#" class="list-group-item">
                  © 2018 Estado do povo
                </a>
                <a href="#" class="list-group-item">
                  Termos de uso
                </a>        
                <a href="#" class="list-group-item">
                  aviso de privacidade
                </a>
              </div>
            </div> 
          </div>
          
        </div>
      </footer>
    )
  }
}

export default Footer