import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'

const PokedexInfo = () => {

  const [pokemon, setPokemon] = useState()
  const { id } = useParams()
  // Get Pokemon by id
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))   
  }, [id])
  
  console.log(pokemon)

  return (
    <div>
      <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
    </div>
  )
}

export default PokedexInfo