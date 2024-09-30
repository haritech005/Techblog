import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'
import Resources from './Resources'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Development from '../categories/Development'
import MobileDevelopment from '../categories/MobileDevelopment'
import ArtificialIntelligence from '../categories/ArtificialIntelligence'
import Testing from '../categories/Testing'
import Blockchain from '../categories/Blockchain'
import Contents from '../HeroContent/Contents'


const NavComponent = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/categories' element={<Categories/>} />

            <Route path="/categories/development" element={<Development/>} />
            <Route path="/categories/mobiledevelopment" element={<MobileDevelopment/>} />
            <Route path="/categories/artificialintlligence" element={<ArtificialIntelligence/>} />
            <Route path="/categories/testing" element={<Testing/>} />
            <Route path="/categories/blockchain" element={<Blockchain/>} />

            <Route path='/resources' element={<Resources/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />

            <Route path='/contents' element={<Contents/>} />
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default NavComponent