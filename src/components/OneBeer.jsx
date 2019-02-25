import React, { Component } from "react";
import BeerService from "./../services/BeerService";


/*
const oneBeer = props => {

let beerService = new BeerService();
let beerId = props.match.params.id;

beerService.getOneBeer(beerId)





return <div>{props.match.params.id}</div>
 
};

export default oneBeer;
*/

export default class OneBeer extends Component {
  constructor(props){
    super(props)
    this.state={
      beer:undefined
    }

    this.beerService = new BeerService();
    this.getOneBeer();
  }

  getOneBeer = () =>{
    let beerId = this.props.match.params.id;
    this.beerService.getOneBeer(beerId)
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