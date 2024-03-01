import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Explore from './Explore'
import Login from './LoginPage'
import Signup from './Signup'
import MyWorkflows from './MyWorkflows'
import { AuthProvider } from './contexts/AuthContext'

function App(props) {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myworkflows" Component={MyWorkflows} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App