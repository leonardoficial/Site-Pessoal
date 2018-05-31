import React, { Component } from "react"
import { render } from "react-dom"

import "./ArticleText.css"

import MainHeader  from "../../containers/MainHeader/MainHeader.jsx"
import NavBar      from "../../containers/NavBar/NavBar.jsx"
import Footer      from "../../containers/Footer/Footer.jsx"
import BlockList   from "../../components/BlockList/BlockList.jsx"

// IMPORT MOCK DATA //
import { HomeBlockList  as Data_BlockList } from "../../utils/mock-data"


import { Posts as temp_data } from "../../utils/mock-data"

const data = temp_data["Guerra Civil gera discussões entre fãs e entusiastas"];

class ArticleText extends Component {

  render() {
  
    return(
      <div class="article-text">
        <NavBar />
        <MainHeader />
          <div class="container page-body">
            <div class="article-header">
              {/* icone temporario. ate achar outro icone de livro aberto */}
              <div class="fa fa-leanpub main-icon" />
              <h2 class="article-title">O titúlo mais simples do mundo</h2>
              <small>o sub título mais "quase" simples</small>
              <div class="article-info">
                <div>
                  <span class="fa fa-id-badge" /> author
                </div>
                <div>
                  <span class="fa fa-tag" /> política
                </div>
                <div>
                  <span class="fa fa-calendar" /> 06/05/2018 às 22:00
                </div>
               <div>
                  <span class="fa fa-star-o" /> 9,5 rating
                </div>
              </div>
            </div>
            <div class="article-body">
              <div class="article-main-icons">
                <span class="fa fa-bookmark-o article-mark" />
                <span class="fa fa-info-circle article-mark" />
              </div>
              <div class="article-tools">
                <div class="tools-group">
                  <span class="fa fa-font" />
                  <span class="fa fa-plus" />
                </div>
                <div class="tools-group">
                  <span class="fa fa-font" />
                  <span class="fa fa-minus" />
                </div>
                <div class="tools-group">
                  <span class="fa fa-align-left" />
                </div>
                <div class="tools-group">
                  <span class="fa fa-align-center" />
                </div>
                <div class="tools-group">
                  <span class="fa fa-align-right" />
                </div>
                <div class="tools-group">
                  <span class="fa fa-link" /> listar links
                </div>
                <div class="tools-group">
                  <span class="fa fa-language" /> idiomas
                </div>
                <div class="tools-group">
                  <span class="fa fa-paragraph" /> parágrafos
                </div>
              </div>
              
              <div class="article-content">
              
              { data.text }

              </div>
            </div>
            <div class="article-footer">
              <div class="article-related">
                <BlockList title="artigos relacionados" list={ Data_BlockList } />
              </div>
            </div>
          </div>
          
        <Footer />
      </div>
    )
  }
}

export default ArticleText