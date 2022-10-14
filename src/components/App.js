// The App.js file is the main component of the app.
// All other components are organized inside this App.js file.

import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function App() {

  const dispatch = useDispatch()


  return (
    <div className='application'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App