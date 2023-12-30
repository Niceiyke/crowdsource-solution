import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import QuestionPage from './pages/QuestionPage'
import QuestionDetailPage from './pages/QuestionDetailPage'

function App() {


  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/question' element={<Home />} />
        <Route path='/ask' element={<QuestionPage />} />
        <Route path='/question/:questionId' element={<QuestionDetailPage />} />


      </Routes>
    </>


  )
}

export default App
