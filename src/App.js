import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Contact from './pages/contact';
import Expertise from './pages/expertise';
import About from './pages/about';
import Professional from './pages/professional';
import Passion from './pages/passion';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Error404 from './pages/error404';
import './App.css'
import './styles/index.scss'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/expertise' element={<Expertise/>} />
            <Route exact path='/professional_projects/:id' element={<Professional/>} />
            <Route exact path='/passion_projects/:id' element={<Passion/>} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='#' element={<Error404 />} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
