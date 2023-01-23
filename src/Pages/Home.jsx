import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer'
import { useNavigate } from 'react-router-dom'
import "./styles/home.css"
const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target["trainer-name"].value.trim()
    dispatch(setNameTrainerGlobal(nameTrainer))
    e.target["trainer-name"].value = " "
    navigate("/pokedex")
  }
  return (
    <div className='home__container'>
          <img className='home__banner' src="/Home/homeBanner.png" alt="" />
            <h1 className='home__welcome'>! Hi trainer ¡</h1>
          <p className='home__text-welcome'> Give me your name to start</p>
          <form className='home__form' onSubmit={handleSubmit}>
            <input placeholder='your name...' className='home__input' id="trainer-name"type="text" />
            <button className='home__btn'>Start</button>
          </form>

      <footer className='home__footer'> 
        <div className='home__footer-low-side'></div>
        <div className='home__pokeball'>
          <div className="home__pokeball-inner"></div>
        </div>

      </footer>

      
    </div>
  )
}

export default Home