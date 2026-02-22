import { HashRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center space-y-6"
      >
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
          Hello, world.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-xl mx-auto">
          This is an empty portfolio boilerplate powered by React, Vite, Tailwind CSS v4, Framer Motion, and shadcn/ui.
        </p>

        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono text-muted-foreground">
          <div className="p-4 rounded-xl border bg-card">React 18</div>
          <div className="p-4 rounded-xl border bg-card">Tailwind v4</div>
          <div className="p-4 rounded-xl border bg-card">Framer Motion</div>
          <div className="p-4 rounded-xl border bg-card">shadcn/ui</div>
        </div>
      </motion.div>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
