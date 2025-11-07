import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider } from 'react-redux'

import 'mdbootstrap/css/bootstrap.css'
import 'mdbootstrap/css/mdb.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
    
  </StrictMode>,
)
