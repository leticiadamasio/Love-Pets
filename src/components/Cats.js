import React, { Component } from 'react'
import styled from 'styled-components'

const Box = styled.section`
  height:100%;
`

const Title = styled.h1`
  font-family: 'Merriweather Sans', sans-serif;
  margin-top: 3vh;
  margin-left: 4.68vw;
  font-size: 4.5vh;
  color: white;
  width: 20vw;
  
  @media (max-width:375px){
    width: 70vw;
  }

  @media (max-width:425px){
    width: 70vw;
  }
  
`
const SubTitle = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  margin-top: 5vh;
  margin-left: 4.68vw;
  font-size: 4.5vh;
  color: white;
  width: 30vw;
  text-decoration: underline;
  @media (max-width:768px){
    width: 45vw;
    margin-top: 3vh;
  }

  @media (max-width:425px){
    width: 80vw;
    margin-top: 3vh;
  }

  @media (max-width:375px){
    width: 90vw;
    margin-top: 2vh;
  }
 
`
const Image = styled.img`
  width: 21vw;
  height: 35vh;
  @media (max-width:768px){
    width: 35vw;
    height: 40vh;
  }

  @media (max-width:425px){
    width: 55vw;
    height: 40vh;
  }

  @media (max-width:375px){
    width: 55vw;
    height: 40vh;
  }
 
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10vh;
  margin-left: 10vw;
  width: 80%;
`
const Cards = styled.ul`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3vh;
  margin-top: 3vh;
  margin-bottom: 5vh;
  color: white;
  background-color: #7785AC;
`
const List = styled.li`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3vh;
  color: white;
  background-color: #7785AC;
`
const Text = styled.p`
  font-size: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  line-height: 1.75;
  width: 30vw;
  color: white;
  margin-left: 4.68vw;
  margin-top: 6vh;

  @media (max-width:768px){
    width: 60vw;
    margin-top: 2vh;
    font-size: 3.5vh;
  }

  @media (max-width:425px){
    width: 80vw;
    margin-top: 2vh;
    font-size: 3.5vh;
  }

  @media (max-width:375px){
    width: 70vw;
    margin-top: 2vh;
  }
  
 
`

export default class Cats extends Component {
  state={
    cats:[
    {
      Photo:"https://i0.wp.com/petcaramelo.com/wp-content/uploads/2021/03/ragdoll-gato.jpg?resize=626%2C417&ssl=1",
      Name:"Oliver",
      Age:"2 months",
      Breed:"Ragdoll"

   },
   {
      Photo:"https://cdn.vidaativa.pt/uploads/2018/03/munchkin-gato.jpg",
      Name:"Mia",
      Age:"4 years old",
      Breed:"Munchkin"

   },
   {
      Photo:"https://t1.ea.ltmcdn.com/pt/posts/1/7/4/nomes_para_gatos_cinzas_22471_orig.jpg",
      Name:"Dylan",
      Age:"3 years old",
      Breed:"Scottish Fold"

   },
   {
      Photo:"https://i0.wp.com/petcaramelo.com/wp-content/uploads/2021/06/Gato-Chartreux-14.jpg?resize=661%2C529&ssl=1",
      Name:"Afrodite",
      Age:"2 months",
      Breed:"Chartreux"

   },
   {
      Photo:"https://wpets.com.br/wp-content/uploads/2020/04/20101212_128.jpg",
      Name:"Loki",
      Age:"1 years old",
      Breed:"British Longhair"

   },
   {
      Photo: "https://t2.ea.ltmcdn.com/pt/posts/7/9/3/nomes_para_gatos_pretos_22397_orig.jpg",
      Name:"Mulan",
      Age:"1 months",
      Breed:"Birmanês"

   },
  ],
  listcat:[],
}
  cats = ()=>{
   this.setState({listcat: this.state.cats.map((item) => (
          <div>
              <Cards>
                <List><Image src={item.Photo}/></List>
                <List>Name: {item.Name}</List>
                <List>Age: {item.Age}</List>
                <List>Breed: {item.Breed}</List>
              </Cards>
          </div>
 
  ))})
}
render(){
    return(
     <Box>
       <Title id='Cats to adopt'>Cats to adopt</Title>
       <SubTitle onClick={this.cats}>Information about the cats</SubTitle>
       <Text>O gatinho que você procura para alegrar sua família está aqui, só esperando pela chance de te fazer mais feliz!
         Hoje somos ponte entre o gatinho que precisa de um lar e o humano que precisa amar. Clicando no título acima você tem acesso a todos os cats que estão disponíveis para adoção.</Text>
      <Container>
        {this.state.listcat}
      </Container>
     </Box>
    )
 }
}