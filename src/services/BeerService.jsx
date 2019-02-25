import axios from 'axios';

export default class BeerService{
  constructor(){
    this.service=axios.create({
      baseURL:"https://ironbeer-api.herokuapp.com/beers"
    });
  }
  getBeers= () =>{
    return this.service.get('/all')
    .then(responseFromServer=> {
      let beerArray = responseFromServer.data;
      return beerArray;
    })
  }

  newBeer = beer =>{
    return this.service.post('/new',{...beer})
    .then(newBeer=>newBeer)
  }

  getOneBeer = (id) => {
    return this.service.get('/single/' + id)
    .then(res => {
      let oneBeer = res.data;
      return oneBeer;
    })
  }

  getRandomBeer = (id) => {
    return this.service.get('/random/')
    .then(res => {
      let oneBeer = res.data;
      return oneBeer;
    })
  }
}
