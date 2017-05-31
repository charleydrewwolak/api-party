import React, { Component } from 'react'
import './Pokemon.css'

class Pokemon extends Component {
  state = {
    pokedex: {
        id: '',
        name: '',
        base_experience: '',
        height: '',
        weight: '',
        sprites: {},
        types: [],
    }
  }

  constructor(props) {
    super(props)
    this.fetchPokeData(props)
  }

  fetchPokeData = (props) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemon}`)
      .then(response => response.json())
      .then(pokedex => this.setState({ pokedex }))
  }
  
  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchPokeData(nextProps)
    }
  
  }
  
  getTypes(props) {
    const { pokedex } = this.state
    let types = ''
    for (let i = 0; i < pokedex.types.length; i++) {
        types = types + " " + pokedex.types[i].type.name
    }
    return types
  }


  render() {
    const { pokedex } = this.state
    
    return (
      <div className="pokemon">
        <img src={pokedex.sprites.front_default} alt="pokemon"/>
        <h3>Id: {pokedex.id}</h3>
        <h3>Name: {pokedex.name}</h3>
        <h3>Base Experience: {pokedex.base_experience}</h3>
        <h3>Height: {pokedex.height}</h3>
        <h3>Weight: {pokedex.weight}</h3>
        <h3>Type: {this.getTypes()}</h3>
        
        
      </div>
    )
  }
}

export default Pokemon