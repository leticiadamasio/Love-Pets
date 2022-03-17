import React, { Component } from 'react'
import styled from 'styled-components'

const Box = styled.section`
  height:100%;
`

const Title = styled.h1`
  font-family: 'Merriweather Sans', sans-serif;
  position: relative;
  top: 3vh;
  left: 4.68vw;
  font-size: 4.5vh;
  color: white;
  width: 20vw;
`
const SubTitle = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  position: relative;
  top: 5vh;
  left: 4.68vw;
  font-size: 4.5vh;
  color: white;
  width: 30vw;
`
const Image = styled.img`
  width: 21vw;
  height: 35vh;
`
const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   margin-top: 10vh;
   margin-left: 10vw;
   width: 80%;
   height: 130vh;
`
const Cards = styled.ul`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3vh;
  position: relative;
  top: 3vh;
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
      <Container>
        {this.state.listcat}
      </Container>
     </Box>
    )
 }
}