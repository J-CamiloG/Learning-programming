import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './shared/components/Header'
import './index.css'
import Hero from './shared/components/Hero'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Header/>
    <Hero/>
  </>
)
