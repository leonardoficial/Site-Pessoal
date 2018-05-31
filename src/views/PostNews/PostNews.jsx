import React, { Component } from "react"

import "./PostNews.css"

import MainHeader  from "../../containers/MainHeader/MainHeader.jsx"
import NavBar      from "../../containers/NavBar/NavBar.jsx"
import Pagination  from "../../containers/Pagination/Pagination.jsx"
import Footer      from "../../containers/Footer/Footer.jsx"
import BadgeList   from "../../components/BadgeList/BadgeList.jsx"
import CardPost    from "../../components/CardPost/CardPost.jsx"

// IMPORT MOCK DATA //
import {
  HomeCategories as Data_Categories
} from "../../utils/mock-data"


export default class PostNews extends Component {

  render() {
  
    return(
      <div class="post-news">
        <NavBar />
        <MainHeader />
        
        <div class="filter-holder">
          <div class="container">
            <div class="row">
          
              <div class="category-holder col-12 col-md-5">
                <div class="tag">
                  Topicos <span class="fa fa-tags" />
                </div>
                <BadgeList list={ Data_Categories } />
              </div>
            
              <div class="input-holder col-12 col-md-5 offset-md-2">
                <div class="tag">
                  Filtro <span class="fa fa-filter" />
                </div>
          
                <div class="input-group">
                  <input class="form-control" />
                  <div class="input-group-append">
                    <button class="btn btn-primary">
                      <span class="fa fa-search" />
                    </button>
                  </div>
                </div>
                
                <div class="tag" style={{marginTop: "20px"}}>
                  Data <span class="fa fa-calendar" />
                </div>
                <select class="form-control">
                  <option>recentes</option>
                  <option>+ 10 dias</option>
                  <option>+ 20 dias</option>
                  <option>+ 1 mês</option>
                </select>
                
              </div>
                
            </div>
          </div>
        </div>
        
        <Pagination />
           
        
        <div class="container page-body">
          <div class="row posts-list">
          
            {
            [1,2,3,4,5, 6, 7, 8].map(() => {
            return(
            
            <div class="col-12 col-md-4">
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



