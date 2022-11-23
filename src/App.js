import React, { useState } from 'react'
import Homepage from './pages/Homepage'
import AppContext from './context/AppContext'

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <AppContext.Provider value={{isDark,setIsDark}}>
      <main>
        <Homepage/>
      </main>
    </AppContext.Provider>
  )
}

export default App