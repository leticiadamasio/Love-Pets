import React, { Component } from 'react'
import styled from 'styled-components'
import Dogs from './Dogs'
import Cats from './Cats'
import Img from '../img/pet.png'
import Image from '../img/menandpet.png'
import Images from '../img/womanandpet.png'

const Body_structure = styled.section`
  background-color: #5B2A86;
`
const Title = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  padding-top: 4vh;
  margin-left: 4.68vw;
  font-size: 4.5vh;
  color: white;
  width: 40vw;
  @media (max-width:543px){
    width: 60vw;
  }

  @media (max-width:375px){
    font-size: 3.5vh;
  }
  
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 40vh;
  margin-top: 5vh;

  @media (max-width:543px){
    margin-top: 2vh;
  }
  
  @media (max-width:375px){
    margin-top: 2vh;
  }
`
const Cards = styled.div`
  font-family: 'Merriweather Sans', sans-serif;
  display: flex;
  flex-wrap: wrap;
  background-color: #7785AC;
  width: 27vw;
  height: 35vh;

  @media (max-width:768px){
    width: 40vw;
    margin-top: 2vh;
  }

  @media (max-width:543px){
    width: 80vw;
    margin-top: 2vh;
   }
   
  @media (max-width:375px){
   width: 80vw;
   margin-top: 2vh;
  }
  
  
`
const Image_pet =styled.img`
  margin-top: 3vh;
  margin-left: 1vw;
  height: 25vh;
  @media (max-width:768px){
    height: 20vh;
    margin-top: 5.5vh;
  }

  @media (max-width:543px){
    height: 28vh;
    margin-top: 4vh;
  }

  @media (max-width:375px){
    height: 20vh;
  }
 
`
const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  line-height: 1.5;
  width: 13vw;
  color: white;
  margin-left: 1vw;
  @media (max-width:768px){
    width:20vw;
    font-size: 3vh;
  }

  @media (max-width:543px){
    width:38vw;
  }
  
  @media (max-width:375px){
    width:45vw;
  }
 
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
         <Text>E n??o h?? recompensa maior do que v??-los se tornando aquela coisinha alegre e saud??vel depois de uma boa dose de cuidado e carinho.</Text>
       </Cards>
       <Cards>
         <Image_pet src={Images}/>
         <Text>Pensando bem, a pergunta ?? outra: se voc?? pode mudar o destino de um animal de rua, por que n??o faria isso?</Text>
       </Cards>
      </Container>
      <Dogs/>
      <Cats/>
    </Body_structure>
    )
  }
}

