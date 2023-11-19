import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import News from './pages/News'
import NewsDetails from './pages/NewsDetails'
import NotFound from './pages/NotFound'
import { ProductProvider } from './components/contexts/ProductContext'

function App() {
  return (
    <BrowserRouter>
      {/* <ProductProvider> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsdetails/:id" element={<NewsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </ProductProvider> */}
    </BrowserRouter>
  )
}

export default App