
import { useSelector } from 'react-redux'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  const nameTrainer = useSelector(state => state.trainer)
 
  console.log(nameTrainer)
  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<Home />} />
        < Route />
      </Routes>
    </div>
  )
}

export default App
