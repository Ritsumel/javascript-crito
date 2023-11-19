import React, { useEffect } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import News from './pages/News'
import NewsDetails from './pages/NewsDetails'
import NotFound from './pages/NotFound'
import { ArticlesProvider } from './components/contexts/ArticlesContext'

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ArticlesProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsdetails/:id" element={<NewsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ArticlesProvider>
    </BrowserRouter>
  )
}

export default App