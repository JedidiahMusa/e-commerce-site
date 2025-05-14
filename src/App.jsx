import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Browse from "./components/Browse"
import MarqueeSec from "./components/MarqueeSec"
import Feedback from "./components/Feedback"

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <MarqueeSec />
      <Cards />
      <Browse />
      <Feedback />
    </div>
      
    </>
  )
}

export default App
