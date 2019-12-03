import React, { Component } from 'react';
import PokeList from './PokeList';
import Pokemon from '../Pokemon';
import DetailView from './DetailView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {pokemon: {}};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });
        console.log(pokemon);
      })
      .catch(err => console.log(err));
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}


export default App;
