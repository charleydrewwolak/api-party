import React, { Component } from 'react'
import './Pokemon.css'

class Pokemon extends Component {
  state = {
    poke: {
        id: '',
        name: '',
        base_experience: '',
        height: '',
        weight: '',
        sprites: {}
    }
  }

  constructor(props) {
    super(props)
    this.fetchPokeData(props)
  }

  fetchPokeData = (props) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemon}`)
      .then(response => response.json())
      .then(poke => this.setState({ poke }))
  }
  
  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchPokeData(nextProps)
    }
  }



  render() {
    const { poke } = this.state
    return (
      <div className="pokemon">
        <img src={poke.sprites.front_default}/>
        <h3>id: {poke.id}</h3>
        <h3>name: {poke.name}</h3>
        <h3>base experience: {poke.base_experience}</h3>
        <h3>height: {poke.height}</h3>
        <h3>weight: {poke.weight}</h3>
      </div>
    )
  }
}

export default Pokemon