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


  return (
    <div className='pokedex-info'>
        <header className='pokedex-info__header'> 
        <img className='pokedex-info__header-img' src="/Home/homeBanner.png" alt="" />
        <div className='pokedex-info__header-low-side'></div>
        <div className='pokedex-info__pokeball'>
          <div className="pokedex-info__pokeball-inner"></div>
        </div>
      </header>

     

      <article className='pokedex-info-card'>
        <header className={`pokedex-info-card__header bg-${pokemon?.types[0].type.name}`}>
          <img className="pokedex-info-card__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className='pokedex-info-card__prebody'>
            <h2 className={`pokedex-info-card__id color-${pokemon?.types[0].type.name}`}>
              #{pokemon?.id}
            </h2>
          <h3 className={`pokedex-info-card__name color-${pokemon?.types[0].type.name}`}>
            {pokemon?.name}
          </h3>
          <ul className='pokedex-info-card__base-info'>
            <li className='pokedex-info-card__weight'>
              <span>Weight</span>
              <p>{pokemon?.weight}</p>
            </li>
            <li className="pokedex-info-card__height">
              <span>Height</span>
              <p>{pokemon?.height}</p>
            </li>
          </ul>
        </section>
        <section className='pokedex-info-card__body'>

          <ul className='pokedex-info-card__types-container'>
            <p className='pokedex-info-card__type-label'>Type</p>

            <div className='pokedex-info-card__type-container'>
          {
              pokemon?.types.map(type => (
                <li className={`pokedex-info-card__type type-${type.type.name}`}key={type.type.name}>
                  <p>{type.type.name}</p>
                </li>
              ))
              }
              </div>
          </ul>

          <ul className='pokedex-info-card__ability-container'>
            <p className='pokedex-info-card__ability-label'>abilities</p>

            <div className='pokedex-info-card__ability-container-item'>
              {
                pokemon?.abilities.map(ability => (
                  <li key={ability.ability.name } className='pokedex-info-card__ability'>
                    <p className='ability__item'>{ability.ability.name}</p>
                  </li>
                ))
                }
            </div>
          </ul>
          </section>
          
          <footer className='poke-info-card__footer'>
          <ul className='poke-info-card__stats-container'>
            {
              pokemon?.stats.map(stat => (
                <li className='poke-info-card__stat' key={stat.stat.name}>
                  <span className='poke-info-card__name-stat'>{stat.stat.name}</span>
                  <span className={`poke-info-card__value-stat color-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                </li>
              ))
            }
            </ul>
            </footer>
        
      </article>

      <article className='pokedex-moves-card'>

        <h2>Movements</h2>
          <ul className='pokedex-moves-card__container'>
            {
              pokemon?.moves.map(move => (
                <li className='move'>
                  {move.move.name}
                </li>
              ))
            }
          </ul>

        </article>
      
    </div>
  )
}

export default PokedexInfo