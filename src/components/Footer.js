import React, { Component } from 'react'
import styled from 'styled-components'
import Instagram from '../img/instagram.png'
import Facebook from '../img/facebook.png'
import Twitter from '../img/twitter.png'
import Whatsapp from '../img/whatsapp.png'

const Container = styled.section`
  background-color:#360568;
`
const Icons = styled.div` 
  display: flex; 
  justify-content: space-evenly;
  width: 30vw;
`
const Images = styled.img`
  width: 4vw;
`

export default class Footer extends Component {
    render(){
    return (
      <Container id='Social'>
       <Icons>
         <Images src={Instagram}/>
         <Images src={Facebook}/>
         <Images src={Twitter}/>
         <Images src={Whatsapp}/>
       </Icons> 
      </Container>
    )
  }
}
