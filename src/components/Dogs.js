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
    margin-top: 75vh;
  }
  @media (max-width:768px){
    margin-top: 40vh;
    width: 60vw;
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
  width: 20vw;
  @media (max-width:375px){
    width: 90vw;
    margin-top: 2vh;
  }
  @media (max-width:768px){
    width: 45vw;
    margin-top: 3vh;
  }
`
const Image = styled.img`
  width: 21vw;
  height: 35vh;
  @media (max-width:375px){
    width: 55vw;
    height: 40vh;
  }
  @media (max-width:768px){
    width: 35vw;
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
  width: 20vw;
  @media (max-width:375px){
    width: 70vw;
    margin-top: 2vh;
    
  @media (max-width:768px){
    width: 60vw;
    margin-top: 2vh;
    font-size: 3.5vh;
  }
}
`
export default class Dogs extends Component {
  state={
    dogs:[
    {
      Photo: "https://www.clubeparacachorros.com.br/wp-content/uploads/2014/07/labrador-preto-sentado.jpg",
      Name:"Ryan",
      Age: "2 years old",
      Breed:"Labrador"

    },
    {
      Photo: "https://cdn.jd1noticias.com/upload/dn_noticia/2017/02/121094419.jpg",
      Name:"Miller",
      Age: "1 years old",
      Breed:"Pitbull"

    },
    {
      Photo: "https://www.adoropets.com.br/wp-content/uploads/2018/06/bichon-sentado.jpg",
      Name:"Maia",
      Age:"2 years old",
      Breed:"Poochon"

    },
    {
      Photo: "https://www.racasdecachorro.com.br/wp-content/uploads/2019/04/769-chihuahua-379738561.jpg",
      Name:"Princesa",
      Age:"8 years old",
      Breed:"Chihuahua"

    },
    {
      Photo: "https://www.zooplus.pt/magazine/wp-content/uploads/2017/03/dobermann-pinscher-welpe-1024x678.jpg",
      Name:"Belinha",
      Age:"5 months",
      Breed:"Doberman"

    },
    {
      Photo:"https://image.cachorrogato.com.br/thumb/800/600/1/imagens/racas/imagem150.jpg",
      Name:"Ralf",
      Age:"3 years old",
      Breed:"Husky siberiano"

    },
  ],
  listdog:[],
}

  dogs = ()=>{
   this.setState({listdog: this.state.dogs.map((item) => (
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
       <Title id='Puppies to adopt'>Puppies to adopt</Title>
       <SubTitle onClick={this.dogs}>Information about the dogs</SubTitle>
       <Text>O cachorrinho que você procura para alegrar sua família está aqui, só esperando pela chance de te fazer mais feliz!
         Hoje somos ponte entre o cachorrinho que precisa de um lar e o humano que precisa amar. Clicando no título acima você tem acesso a todos os dogs que estão disponíveis para adoção.</Text>
      <Container>
        {this.state.listdog}
      </Container>
     </Box>
    )
 }
}