import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const PokemonCard = ({ url }) => {
  
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = url
    axios.get(URL)
      .then(res  =>  setPokemon(res.data))
      .catch(err => console.log(err))
  },[])
  console.log(pokemon)
  return (
    <article>
      <header>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      <section>
      <h3>{pokemon?.name}</h3>
        <ul>
        {
            pokemon?.types.map(type => (
              <li key={type.type.name}>
                <p>{type.type.name}</p>
              </li>
            ))
        }
        </ul>
      </section>
      <footer>
        <ul>
          {
            pokemon?.stats.map(stat => (
              <li key={stat.stat.name}>
                <span>{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokemonCard