import React from 'react'
import ReactDOM from 'react-dom/client'
import CardTwitter from './CardTwitter'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <CardTwitter isFollowing  name='fernantorres' username='fitter'  />
    <CardTwitter isFollowing={false} name='J-CamiloG' username='juan camilo campillo'  />
    <CardTwitter name='carlos' username='carlos'  />
  </>
)
