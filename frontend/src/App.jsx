import { useState } from 'react'
import './App.css'
import {ClerkProviderWithRoutes} from './auth/ClerkProviderWithRoutes.jsx'
import {Layout} from "./layout/Layout.jsx"
import {ChallengeGenerator} from "./challenge/ChallengeGenerator.jsx"

import {Routes, Route } from 'react-router-dom'

function App() {
  return <ClerkProviderWithRoutes>
        <Routes>

        </Routes>
  </ClerkProviderWithRoutes>
}

export default App
