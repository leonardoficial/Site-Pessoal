import React, { Component } from "react"
import { render } from "react-dom"

import $ from "jquery"

import "./ArticleFull.css"

import MainHeader  from "../../containers/MainHeader/MainHeader.jsx"
import NavBar      from "../../containers/NavBar/NavBar.jsx"
import Footer      from "../../containers/Footer/Footer.jsx"
import CardPost    from "../../components/CardPost/CardPost.jsx"

import { Posts as temp_data } from "../../utils/mock-data"

const data = temp_data["Guerra Civil gera discussões entre fãs e entusiastas"];

class ArticleFull extends Component {

  componentDidMount() {
  }

  render() {
  
    return(
      <div class="article-full">
        <NavBar />
        <MainHeader />
        
        {/* <div class="main-bar" /> */ }
        
        <div class="container page-body">
          <div class="article-header">
            {/* icone temporario. ate achar outro icone de livro aberto */}
            <span class="fa fa-leanpub main-icon" />
            <h2 class="article-title">
              O titúlo mais simples do mundo
            </h2>
            <small>
              o sub título mais "quase" simples que você poderia encontrar
              na face da terra aqui se encontra neste momento. Aprecie sua 
              sutíl simplicidade.
              </small>
          </div>
          
          <div class="article-info">
            O nome do autor <span class="bar">/</span>
            12/12/12        <span class="bar">/</span>
            Tecnologia      
          </div>
            
          <div class="article-body">
            <div class="card image-holder">
              <img src="./images/image-quote.jpg" 
              class="article-full-image" />
              <div class="black-opac" />
            </div>
              
            <div class="article-content">     
              { data.text }
            </div>
          </div>         
        </div>
          
        <div class="article-related container">
          <h2>Artigos relacionados</h2>
          <div class="row">
            {
            [1,2,3,4].map(() => {
            return(
            
            <div class="col-12 col-md-3">
              <CardPost />
            </div>
            
            )
            })
            }    
          </div>
        </div>
          
        <Footer />
      </div>
    )
  }
}

export default ArticleFull