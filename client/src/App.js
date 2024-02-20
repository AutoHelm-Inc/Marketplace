import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Explore from './Explore'
import Login from './LoginPage'

function App(props) {
  const firebaseApp = props.firebaseApp;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home firebaseApp={firebaseApp} />} />
        <Route path="/explore" element={<Explore firebaseApp={firebaseApp} />} />
        <Route path="/login" element={<Login firebaseApp={firebaseApp} />} />
      </Routes>
    </Router>
  )
}

export default App