import{Routes , Route}from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home/Home'
import Coursedetails from './pages/Courses/CourseDetails'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course/:id' element={<Coursedetails/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
