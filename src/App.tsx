import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechTicker from './components/TechTicker'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechTicker />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
