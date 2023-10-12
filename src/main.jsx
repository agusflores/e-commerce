import('preline')
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBAFrqterQ4QPkVgL-i_0NJCbEVGui5ykA',
  authDomain: 'e-commerce-daa3b.firebaseapp.com',
  projectId: 'e-commerce-daa3b',
  storageBucket: 'e-commerce-daa3b.appspot.com',
  messagingSenderId: '98877175024',
  appId: '1:98877175024:web:955189c33cf8abd4b8be35',
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
