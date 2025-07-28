import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopApp.jsx'

createRoot(document.getElementById('root')).render(

  <HashRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>
)
