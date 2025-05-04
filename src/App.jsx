import { useState } from 'react'
import './App.css'
import Golova from './components/Golova/Golova'
import Center from './components/Center/Center'
import Center2 from './components/Center2/Center2'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <header>
      <Golova />
    </header>
    <main>
      <section>
      <Center />
      </section>
      <section>
        <Center2 />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
