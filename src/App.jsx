import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import { Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NewPlayerForm from './components/NewPlayerForm'

function App() {


  return (

    <>

    <h1>Puppy Bowl 2.0</h1>

    <Routes >
      <Route path="/" element={<AllPlayers/>}/>
      <Route path="/players/:id" element={<SinglePlayer/>}/>
    </Routes>
    
    </>
  )
}

export default App
