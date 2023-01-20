import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "./styles/pokeCard.css"

const PokemonCard = ({ url }) => {

  const navigate = useNavigate()
  
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = url
    axios.get(URL)
      .then(res  =>  setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])
  
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }
  return (
    <article className='poke-card' onClick={handleClick}>
      <header className={`poke-card__header bg-${pokemon?.types[0].type.name}`}>
        <img className='poke-card__sprite' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      <section className='poke-card__body'>
      <h3 className='poke-card__name'>{pokemon?.name}</h3>
        <ul className='poke-card__types-container'>
        {
            pokemon?.types.map(type => (
              <li className='poke-card__type' key={type.type.name}>
                <p>{type.type.name}</p>
              </li>
            ))
        }
        </ul>
      </section>
      <footer className='poke-card__footer'>
        <ul className='poke-card__stats-container'>
          {
            pokemon?.stats.map(stat => (
              <li className='poke-card__stat' key={stat.stat.name}>
                <span className='poke-card__name-stat'>{stat.stat.name}</span>
                <span className='poke-card__value-stat'>{stat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokemonCard