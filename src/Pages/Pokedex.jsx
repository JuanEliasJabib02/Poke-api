import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import PokemonCard from '../components/Pokedex/PokemonCard'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pokedex/Pagination'

const Pokedex = () => {

  const navigate = useNavigate()

  const nameTrainer = useSelector(state => state.nameTrainer)

  const [pokemons, setPokemons] = useState()

  const [types, setTypes] = useState()

  const [typeSelected, setTypeSelected] = useState("choose-by-type")

  console.log(typeSelected)

  useEffect(() => {
    //Get all pokemons
    if (typeSelected !== "choose-by-type") {
      const URL = typeSelected
      axios.get(URL)
        .then(res => setPokemons(res.data?.pokemon.map(e => e.pokemon)))
        .catch(err => console.log(err))
    }
    else {
      console.log("executed here")
      const URL = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=151"
      axios.get(URL)
        .then(res => setPokemons(res.data?.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])

  useEffect(() => {
    //Get all types
    const URL = "https://pokeapi.co/api/v2/type"
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  },[])

  // For do the input to search by name
  const handleSubmit = (e) => {
    e.preventDefault()
    const inputPokemonName = e.target["pokemon-filter"].value.trim().toLowerCase()
    navigate(`/pokedex/${inputPokemonName}`)
  }
  // For filter by type

  const handleChange = (e) => {
    e.preventDefault()
      const input = e.target.value
    setTypeSelected(input) 
    setPage(1)
  }


  //Pagination

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)

  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage
  const maxPage = pokemons && Math.ceil(pokemons.length / pokePerPage)
  
  return (
    <div>
      <h2>Welcome {nameTrainer}, here you can find your favorite pokemon</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="pokemon-filter" />
        <button>Search</button>
      </form>

      <select onChange={handleChange}>
        <option value="choose-by-type">Choose by type</option>
        {
          types?.map(type => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))
        } 
      </select>
      <div className='poke-container'>
        {
          pokemons?.slice(initialPoke,finalPoke).map(pokemon => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url} 
            />
          ))
        }
      </div>
      < Pagination
        page={page}
        maxPage={maxPage}
        setPage={setPage}
      />
    </div>
  )
}

export default Pokedex