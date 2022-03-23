import React, { Component } from 'react'
import styled from 'styled-components'
import Imagem from '../img/dog.png'
import Img from '../img/cat.png'

const Images = styled.div `
  background-color: #9ac6c5;
  width: 100%;
  display: flex;
  align-items: center;
` 
  const Dog = styled.img`
  margin-left: 15vw;
  width: 7vw;
  @media (max-width:768px){
    width:15vw;
    margin-left: 10vw;
  }

  @media (max-width:375px){
   width:15vw;
   margin-left: 10vw;
  }
 
`
const Cat = styled.img`
  width: 5vw;
  @media (max-width:768px){
    width:10vw;
  }

  @media (max-width:375px){
   width:10vw;
  }

`
const Title = styled.h1`
  font-family: 'Indie Flower', cursive;
  font-size: 15vh;
  color: black;
  margin-left: 15vw;
 
  @media (max-width:768px){
    margin-left: 7vw;
    }
  
  @media (max-width:375px){
    font-size:9vh;
    margin-left: 2vw;
    }
`
const Menu = styled.ul`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3.5vh;
  display: flex;
  justify-content: space-evenly;
  color: black;
  background-color: #A5E6BA;
  @media (max-width:375px){
  font-size: 2.5vh;
  }

`
const List =styled.a`
   text-decoration:none;
   color: black;
   width: 13%;
   display:flex;
   align-items: center;
   justify-content: center;

   @media (max-width:768px){
    text-align: center;
  }

   @media (max-width:375px){
    width:25vw;
    text-align: center;
  }

`
export default class Header extends Component {
    render(){
    return (
      <section>
        <Images>
          <Dog src={Imagem} alt="dog-paw"/>
          <Cat src={Img} alt="cat-paw"/>
          <Title>Love Pets</Title>
        </Images>
         <Menu>
           <List href='#Home'><li>Home</li></List>
           <List href='#Puppies to adopt'><li>Puppies to adopt</li></List>
           <List href='#Cats to adopt'><li>Cats to adopt</li></List>
           <List href='#Social'><li>Social networks</li></List>
         </Menu>
      </section> 
    )
  }
}
