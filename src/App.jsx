import './App.css'
import Challenge from './challenge1/Challenge'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
       
          <Route path='/' element={<Challenge />} />
         
      </Routes>
    </>
  )
}

export default App
