import React, { Component } from "react"
import { render } from "react-dom"

import "./utils/preload.js"
import "./styles/styles.js"

import App from "./views/Home/Home.jsx"

render(
  <App />,
  document.getElementById("root")
);


