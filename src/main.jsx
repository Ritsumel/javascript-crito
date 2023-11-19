import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/index.scss'
import { ArticlesProvider } from './components/contexts/ArticlesContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </React.StrictMode>,
)
