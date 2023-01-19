import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer'
import { useNavigate } from 'react-router-dom'

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
    <div>
      <img src="/Home/homeBanner.png" alt="" />
      <h1> Hi trainer</h1>
      <p> Give mey your name to start</p>
      <form onSubmit={handleSubmit}>
        <input id="trainer-name"type="text" />
        <button>Start</button>
      </form>
    </div>
  )
}

export default Home