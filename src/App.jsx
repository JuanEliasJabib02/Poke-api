

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './Pages/Pokedex'
import PokedexInfo from './Pages/PokedexInfo'

function App() {
  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<Home />} />
        {/* Protected Routes */}
        < Route element={<ProtectedRoutes />}>
          < Route path='/pokedex' element={< Pokedex />} />
          < Route path="/pokedex/:id" element={< PokedexInfo/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
