import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import OneBeer from './components/OneBeer';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';



class App extends Component {
  render() {
    return (
      
      <div className="App"> 
       <Header />
      <Switch>
    
        <Route exact path="/home" component = {Home} />
        <Route exact path="/beers" component = {Beers} />
        <Route exact path="/random" component = {RandomBeer} />
        <Route path="/new-beer" component = {NewBeer} />
        <Route path="/one-beer/:id" component = {OneBeer} />
      </Switch>
      </div>
    
     
    );
  }
}

export default App;
