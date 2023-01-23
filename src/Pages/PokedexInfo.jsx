import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'

import "./styles/pokedexInfo.css"

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
        <header className='pokedex-info__header'> 
        <img className='pokedex-info__header-img' src="/public/Home/homeBanner.png" alt="" />
        <div className='pokedex-info__header-low-side'></div>
        <div className='pokedex-info__pokeball'>
          <div className="pokedex-info__pokeball-inner"></div>
        </div>
      </header>

      <article className='pokedex-info-card'>
        <header className='pokedex-info-card__header'>
          <img className="pokedex-info-card__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
          <h2 className='pokedex-info-card__id'>
            #{pokemon?.id}
          </h2>
          <h3 className='pokedex-info-card__name'>
            {pokemon?.name}
          </h3>
          <ul className='pokedex-info-card__base-info'>
            <li className='pokedex-info-card__weight'>
              <span>Weight</span>
              {pokemon?.weight}
            </li>
            <li className="pokedex-info-card__height">
              <span>Height</span>
              {pokemon?.height}
            </li>
          </ul>
        </header>
        <section className='pokedex-info-card__body'>
          <ul className='pokedex-info-card__types-container'>
            <p className='pokedex-info-card__type-label'>Type</p>
          {
              pokemon?.types.map(type => (
                <li className='pokedex-info-card__type' key={type.type.name}>
                  <p>{type.type.name}</p>
                </li>
              ))
          }
          </ul>

          <ul className='pokedex-info-card__ability-container'>
            <p className='pokedex-info-card__ability-label'>abilities</p>
            {
              pokemon?.abilities.map(ability => (
                <li key={ability.ability.name } className='pokedex-info-card__ability'>
                  <p>{ability.ability.name}</p>
                </li>
              ))
            }
          </ul>
              
          <ul className='poke-card__stats-container'>
            {
              pokemon?.stats.map(stat => (
                <li className='poke-card__stat' key={stat.stat.name}>
                  <span className='poke-card__name-stat'>{stat.stat.name}</span>
                  <span className={`poke-card__value-stat color-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </section>

        <footer className='pokedex-info-card__movements'>
          <ul className='poke-info__moves-container'>
            {
              pokemon?.moves.map(move => (
                <li>
                  {move.move.name}
                </li>
              ))
            }
          </ul>

        </footer>
      </article>
      
    </div>
  )
}

export default PokedexInfo