import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShoppingCartPrivider from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShoppingCartPrivider>
      <App/>
    </ShoppingCartPrivider>
  </BrowserRouter>
)
