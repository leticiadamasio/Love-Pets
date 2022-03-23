import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { createGlobalStyle } from 'styled-components'

//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

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style:none;
    text-decoration:none;
  }
`

export default class App extends Component {
  render(){
    return (
      <div>
       <GlobalStyle/>
       <Header/>
       <Main/>
       <Footer/>
      </div>
    )
  }
}

