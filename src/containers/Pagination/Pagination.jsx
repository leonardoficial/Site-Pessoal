import React, { Component } from "react"

import "./Pagination.css"

export default class Pagination extends Component {

  render() {
  
    return(
      <nav class="pagination-nav container">
        <ul class="pagination pagination-lg justify-content-center">
          <li class="page-item"><a class="page-link">&laquo;</a></li>
          <li class="page-item"><a class="page-link">1</a></li>
          <li class="page-item"><a class="page-link">2</a></li>
          <li class="page-item"><a class="page-link">3</a></li>
          <li class="page-item"><a class="page-link">...</a></li>
          <li class="page-item"><a class="page-link">&raquo;</a></li>
        </ul>
      </nav>
    );
  }
}