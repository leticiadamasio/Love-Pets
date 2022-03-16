import React, { Component } from 'react'
import styled from 'styled-components'
import Dogs from './components/Dogs'
import Img from '../img/pet.png'
import Image from '../img/menandpet.png'
import Images from '../img/womanandpet.png'

const Body_structure = styled.section`
   background-color: #5B2A86;
   height: 100vh;
   width: 100%;
`
const Title = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  position: relative;
  top: 3vh;
  left: 4.68vw;
  font-size: 4.5vh;
  color: white;
  width: 40vw;
`
const Container = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   height: 40vh;
`
const Cards = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  display: flex;
  position: relative;
  top: 4vh;
  background-color: #7785AC;
  width: 27vw;
  height: 35vh;

`
const Image_pet =styled.img`
  position: relative;
  top: 3vh;
  left: 1vw;
  height: 25vh;
`
const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  line-height: 1.5;
  width: 13vw;
  color: white;
  position: relative;
  left: 1vw;
`

export default class Main extends Component {
    render(){ 
    return (
      <Body_structure>
       <Title id='Home'>Por que adotar?</Title>
      <Container>
       <Cards>
         <Image_pet src={Img}/>
         <Text>Nesse exato momento, existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu.</Text>
       </Cards>
       <Cards>
         <Image_pet src={Image}/>
         <Text>E não há recompensa maior do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho.</Text>
       </Cards>
       <Cards>
         <Image_pet src={Images}/>
         <Text>Pensando bem, a pergunta é outra: se você pode mudar o destino de um animal de rua, por que não faria isso?</Text>
       </Cards>
      </Container>
      <Dogs/>
    </Body_structure>
    )
  }
}

