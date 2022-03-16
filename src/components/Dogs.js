import React, { Component } from 'react'
import styled from 'styled-components'

export default class Dogs extends Component {
  state={
    dogs:[
    {
      Photo: "",
      Name:"Ryan",
      Age: "2 years old",
      Breed:"Labrador"

    },
    {
      Photo: "",
      Name:"Miller",
      Age: "1 years old",
      Breed:"Pitbull"

    },
    {
      Photo: "",
      Name:"Maia",
      Age:"2 years old",
      Breed:"Pooch"

    },
    {
      Photo: "",
      Name:"Pricesa",
      Age:"8 years old",
      Breed:"Pinscher"

    },
    {
      Photo: "",
      Name:"Belinha",
      Age:"5 months",
      Breed:"Dobberman"

    },
    {
      Photo:"",
      Name:"Ralf",
      Age:"3 years old",
      Breed:"Husky siberiano"

    },
  ],
  listdog:[],

    cats:[
    {
      Photo:"https://i0.wp.com/petcaramelo.com/wp-content/uploads/2021/03/ragdoll-gato.jpg?resize=626%2C417&ssl=1",
      Name:"Oliver",
      Age:"2 months",
      Breed:"Ragdoll"

   },
   {
      Photo:"https://casaeconstrucao.org/wp-content/uploads/2021/08/15-gato-Munchkin-de-pelo-branco-e-preto.jpg",
      Name:"Mia",
      Age:"4 years old",
      Breed:"Munchkin"

   },
   {
      Photo:"https://cdn.vidaativa.pt/uploads/2018/03/scottish-fold-gato-850x514.jpg",
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
      Photo: "https://i.pinimg.com/originals/70/ee/b3/70eeb34f20f2a075b6826003c4c79e7e.jpg",
      Name:"Mulan",
      Age:"10 months",
      Breed:"Birmanês"

   },
  ],
  listcat:[],
}
  dogs = ()=>{
   this.setState({listdog: this.state.dogs.map((item) => (
          <div>
              <ul>
                <li>{item.Photo}</li>
                <li>Name:{item.Name}</li>
                <li>Age:{item.Age}</li>
                <li>Breed:{item.Breed}</li>
              </ul>
          </div>
 
  ))})
}
render(){
    return(
      <section>
        <h1 id='Puppies to adopt'>Puppies to adopt</h1>
        <h2 onClick={this.state.dogs}>Information about the dogs</h2>
        <div onClick={this.state.listdog}>Dogs</div>
      </section>
    )
 }
}