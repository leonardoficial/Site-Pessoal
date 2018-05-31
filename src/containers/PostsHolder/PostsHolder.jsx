import React, { Component } from "react"

import "./PostsHolder.css"

import Post from "../../components/Post/Post.jsx"

import { PostsHolder as data } from "../../utils/mock-data"

const list = data.map((item) => {
  return(
    <Post title={ item.title } src={ item.imageurl }>
      { item.body }
    </Post>
  );
});

class PostsHolder extends Component {
  render() {
    return(
      <div>    
        { list }
      </div>
    )
  }
}

export default PostsHolder