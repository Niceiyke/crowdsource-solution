import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import QuestionPage from './pages/QuestionPage'

function App() {


  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ask' element={<QuestionPage />} />


      </Routes>
    </>


  )
}

export default App
