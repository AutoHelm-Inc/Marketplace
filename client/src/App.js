import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Explore from './Explore'
import Login from './LoginPage'
import MyWorkflows from './MyWorkflows'

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myworkflows" element={<MyWorkflows />} />
      </Routes>
    </Router>
  )
}

export default App