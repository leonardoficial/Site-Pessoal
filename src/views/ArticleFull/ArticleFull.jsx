import React, { Component } from "react"
import { render } from "react-dom"

import "./ArticleFull.css"

import MainHeader  from "../../containers/MainHeader/MainHeader.jsx"
import NavBar      from "../../containers/NavBar/NavBar.jsx"
import Footer      from "../../containers/Footer/Footer.jsx"
import Post        from "../../components/Post/Post.jsx"

import { Posts as temp_data } from "../../utils/mock-data"

const data = temp_data["Guerra Civil gera discussões entre fãs e entusiastas"];

class ArticleFull extends Component {

  render() {
  
    return(
      <div class="article-full">
        <NavBar />
        <MainHeader />
        
        <div class="header-holder">
          <div class="container">
            <div class="row">
          
              <div class="header-info col-12">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <span class="fa fa-id-badge" /> author
                  </div>
                  <div class="col-12 col-md-6">
                    <span class="fa fa-tag" /> política
                  </div>
                  <div class="col-12 col-md-6">
                    <span class="fa fa-calendar" /> 06/05/2018 às 22:00
                  </div>
                 <div class="col-12 col-md-6">
                    <span class="fa fa-star-o" /> 9.5 rating
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
          <div class="container page-body">
            <div class="article-header">
              {/* icone temporario. ate achar outro icone de livro aberto */}
              <div class="fa fa-leanpub main-icon" />
              <h2 class="article-title">O titúlo mais simples do mundo</h2>
              <small>o sub título mais "quase" simples</small>
             
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
            <div class="article-footer">
              <div class="article-related">
                <h1>artigos relacionados</h1>
                <div class="row">
                  <div class="col-12">
                    <Post title="post relacionado" src="./images/image-quote.jpg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                      ac convallis nunc, in faucibus massa. Lorem ipsum dolor 
                      sit amet, consectetur adipiscing elit.
                    </Post>
                  </div>
                
                  <div class="col-12">
                    <Post title="post relacionado" src="./images/image-quote.jpg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                      ac convallis nunc, in faucibus massa. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit.
                    </Post>
                  </div>
                
                </div>
                
              </div>
            </div>
          </div>
          
        <Footer />
      </div>
    )
  }
}

export default ArticleFull