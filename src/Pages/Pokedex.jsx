import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import PokemonCard from '../components/Pokedex/PokemonCard'
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {

  const navigate = useNavigate()
  const nameTrainer = useSelector(state => state.nameTrainer)

  const [pokemons, setPokemons] = useState()


  useEffect(() => {

    //Get all pokemons
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
    axios.get(URL)
      .then(res => setPokemons(res.data?.results))
      .catch(err => console.log(err))
  }, [])

  // For do the input to search by name
  const handleSubmit = (e) => {
    e.preventDefault()
    const inputPokemonName = e.target["pokemon-filter"].value.trim().toLowerCase()
    navigate(`/pokedex/${inputPokemonName}`)
  }
  
  return (
    <div>
      <h2>Welcome {nameTrainer}, here you can find your favorite pokemon</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="pokemon-filter" />
        <button>Search</button>
      </form>
      <div className='poke-container'>
        {
          pokemons?.map(pokemon => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
              
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex