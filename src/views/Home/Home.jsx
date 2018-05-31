import React, { Component } from "react"
import { render } from "react-dom"

import "./Home.css"

import MainHeader      from "../../containers/MainHeader/MainHeader.jsx"
import NavBar          from "../../containers/NavBar/NavBar.jsx"
import Footer          from "../../containers/Footer/Footer.jsx"
import TinyPostsHolder from "../../containers/TinyPostsHolder/TinyPostsHolder.jsx"
import PostsHolder     from "../../containers/PostsHolder/PostsHolder.jsx"
import MainPost        from "../../components/MainPost/MainPost.jsx"
import TopList         from "../../components/TopList/TopList.jsx"
import BadgeList       from "../../components/BadgeList/BadgeList.jsx"
import BlockList       from "../../components/BlockList/BlockList.jsx"
import SocialMedia     from "../../components/SocialMedia/SocialMedia.jsx"
import ImageQuote      from "../../components/ImageQuote/ImageQuote.jsx"
import JoinUs          from "../../components/JoinUs/JoinUs.jsx"
import Ads             from "../../components/Ads/Ads.jsx"

// IMPORT MOCK DATA //
import { 
  HomeImageQuote as Data_ImageQuote,
  HomeCategories as Data_Categories,
  HomeBlockList  as Data_BlockList,
  HomeTopList    as Data_TopList
  
} from "../../utils/mock-data"


class Home extends Component {

  render() {
  
    return(
      <div class="home">
        <NavBar     />
        <MainHeader />
        
        <div class="container page-body">
          <MainPost />
          
          <div class="row" style={{marginBottom: "20px"}}>
          
            <div class="col-sm-6">
              <ImageQuote 
               author={ Data_ImageQuote.author }
               imageurl={ Data_ImageQuote.imageurl }>
                { Data_ImageQuote.body } 
              </ImageQuote>
            </div>
            
            <div class="col-sm-6">
              <TinyPostsHolder />
            </div>
          </div>
          
          <div class="row" style={{"margin-bottom": "20px"}}>
            <div class="col-sm-5">
              <JoinUs />
            </div>
            
            <div class="col-sm-4">
              <BlockList title="Redação" list={ Data_BlockList } />
            </div>
            
            <div class="col-sm-3">
              <Ads />
            </div>
            
          </div>
          
          <div class="row" style={{marginBottom: "20px"}}>
          
            <div class="col-sm-3">
              <TopList title="Top 5 mais lidas" list={ Data_TopList } />
            </div>
          
            <div class="col-sm-9">
              <BadgeList list={ Data_Categories } />
              <PostsHolder />
            </div>
            
          </div>
          
        </div>
        
        <Footer />
      </div>
    );
  }
}



export default Home






