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
  @media (max-width:768px){
    width: 40vw;
  }

  @media (max-width:375px){
    width: 55vw;
  }
 
`
const Images = styled.img`
  width: 4vw;
  @media (max-width:768px){
    width: 6vw;
  }
  
  @media (max-width:375px){
    width: 8vw;
  }

`

export default class Footer extends Component {
    render(){
    return (
      <Container id='Social'>
       <Icons>
         <a href='https://www.instagram.com/lele_damasio/' target="_blank"><Images src={Instagram}/></a>
         <a href='https://www.facebook.com/lele.damasio/' target="_blank"><Images src={Facebook}/></a>
         <a href='https://twitter.com/Leticdamas' target="_blank"><Images src={Twitter}/></a>
         <a href='https://wa.me/21999134926?text=Tive%20interesse%20no%20pet:%20' target="_blank"><Images src={Whatsapp}/></a>
       </Icons> 
      </Container>
    )
  }
}
