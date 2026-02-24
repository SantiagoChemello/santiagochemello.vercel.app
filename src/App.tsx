import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechTicker from './components/TechTicker'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
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
    </ThemeProvider>
  )
}

export default App
