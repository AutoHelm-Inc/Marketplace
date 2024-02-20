import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Explore from './Explore'
import Login from './LoginPage'

function App(props) {
  const app = props.firebaseApp;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home firebaseApp={app} />} />
        <Route path="/explore" element={<Explore firebaseApp={app} />} />
        <Route path="/login" element={<Login firebaseApp={app} />} />
      </Routes>
    </Router>
  )
}

export default App