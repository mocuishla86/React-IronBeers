import React, { Component } from 'react'
import Header from './Header';
import BeerService from "./../services/BeerService";

export default class RandomBeer extends Component {

  constructor(props){
    super(props)
    this.state={
      beer:[]
    }

    this.beerService = new BeerService();
    this.getRandomBeer();
  }

  getRandomBeer = () =>{
    let beerId = this.props.match.params.id;
    this.beerService.getRandomBeer(beerId)
    .then(beerReturnedByTheService=>{
          console.log(beerReturnedByTheService)
   
      this.setState({beer:beerReturnedByTheService})
    })
    .catch(err=>console.log(err))
  }

  render() {
    if(!this.state.beer) {
      return <div>Cargando...</div>
    }

    return (
    
      <div>
          <Header />
       <div>Name: {this.state.beer.name}</div>
       <img src={this.state.beer.image_url} alt="beerImage"/>
       <div>First brewed: {this.state.beer.first_brewed}</div>
       <div>{this.state.beer.tagline}</div>
       <div>Atenuation level: {this.state.beer.attenuation_level}</div>
       <div>Description: {this.state.beer.description}</div>
       <div>{this.state.beer.tagline}</div>
       
       </div>
    )
  }
}
