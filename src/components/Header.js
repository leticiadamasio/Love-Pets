import React, { Component } from 'react'
import styled from 'styled-components'
import Imagem from '../img/dog.png'
import Img from '../img/cat.png'

const Container = styled.section`
`
const Images = styled.div `
  background-color: #9ac6c5;
  width: 100%;
  display: flex;
  align-items: center;
`
const Dog = styled.img`
  position: relative;
  left: 15vw;
  width: 7vw;
`
const Cat = styled.img`
  position: relative;
  left: 15vw;
  width: 5vw;
`
const Title = styled.h1`
  font-family: 'Indie Flower', cursive;
  position: relative;
  left: 30vw;
  font-size: 15vh;
  color: black;
`
const Menu = styled.ul`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3.5vh;
  display: flex;
  justify-content: space-evenly;
  color: black;
  background-color: #A5E6BA;
`
const List =styled.a`
   text-decoration:none;
   color: black;
   width: 13%;
   display:flex;
   align-items: center;
   justify-content: center;
`
export default class Header extends Component {
    render(){
    return (
      <Container>
        <Images>
          <Dog src={Imagem} alt="dog-paw"/>
          <Cat src={Img} alt="cat-paw"/>
          <Title>Love Pets</Title>
        </Images>
         <Menu>
           <List href='#Home'><li>Home</li></List>
           <List href='#Puppies to adopt'><li>Puppies to adopt</li></List>
           <List href=''><li>Cats to adopt</li></List>
           <List href='#Social'><li>Social networks</li></List>
         </Menu>
      </Container> 
    )
  }
}
