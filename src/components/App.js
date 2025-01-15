import React from "react";
import './../styles/App.css';


import { useState } from "react"

const App = () => {
  const [name, setName] = useState('')
  return (
    <div>
      {/* Do not remove the main div */}
      <h3>Enter Your Name:</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {name.length != 0 && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
