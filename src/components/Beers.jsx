import React, { Component } from 'react'
import Header from './Header';
import BeerService from './../services/BeerService';
import { Link } from "react-router-dom";

export default class Beers extends Component {
  constructor(props){
    super(props)
    this.state={
      beers:[]
    }
    this.beerService = new BeerService();
    this.getBeers();
  }

  getBeers = () =>{
    this.beerService.getBeers()
    .then(beersReturnedByTheService=>{
          console.log(beersReturnedByTheService)
   
      this.setState({beers:beersReturnedByTheService})
    })
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <div>
         <Header />
          {this.state.beers.map((beer, index) => {
            return (
              <div key={index}>
                <Link to={`/one-beer/${beer._id}`}><h2>{beer.name}</h2></Link>
                <img src={beer.image_url} alt="beerImage"/>
                <div>{beer.tagline}</div>
                <div>Created by: {beer.contributed_by}</div>
              </div>
            )
          })}
      </div>
    )
  }
}
