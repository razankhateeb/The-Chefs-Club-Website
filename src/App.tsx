import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Order } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'


function App() {
  return <>
    <ShoppingCartProvider >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </ShoppingCartProvider>
  </>
}
export default App
