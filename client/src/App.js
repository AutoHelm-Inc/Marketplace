import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Explore from './Explore'

function App() {

  const [backendExpressData, setBackendExpressData] = useState([{}])

  useEffect(() => {
    fetch("/serverUpTest").then(
      response => response.json()
    ).then(
      data => {
        setBackendExpressData(data)
      }
    )
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  )
}

export default App