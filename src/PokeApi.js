import React, { Component } from 'react'
import './PokeApi.css'
import { Route } from 'react-router-dom'
import Pokemon from './Pokemon'

class PokeApi extends Component {
  state = {
    pokemon: ''
  }

  handleChange = (ev) => {
    const pokemon = ev.currentTarget.value
    this.setState({ pokemon })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokeapi/${this.state.pokemon}`)
  }
  

  render() {
    return (
      <div className="pokeapi">
        <img className="pokeball" src="https://s-media-cache-ak0.pinimg.com/originals/15/61/dc/1561dcb8a19ad8e6d4417b29f8c38161.jpg" alt="pokeball" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.pokemon}
              onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Look up Pokemon</button>
          </div>
        </form>


        <Route path='/pokeapi/:pokemon' component={Pokemon} />
        <Route exact path='/pokeapi' render={() => (
          <h3>Please enter a pokemon id  or name to search on PokeApi</h3>
        )} />
      </div>
    )
  }
}

export default PokeApi