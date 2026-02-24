import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, FileText, Github, Linkedin, ChevronDown } from 'lucide-react'
import { Typewriter } from './ui/Typewriter'
import { FlipCard, FlipCardFront, FlipCardBack } from './ui/FlipCard'

export default function Hero() {
    const [cvOpen, setCvOpen] = useState(false)
    const cvRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (cvRef.current && !cvRef.current.contains(e.target as Node)) {
                setCvOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center py-20 overflow-hidden"
        >
            <div
                className="pointer-events-none absolute top-4 left-[40%] -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.25]"
                style={{
                    background: 'radial-gradient(circle, hsl(213 80% 55%), transparent 70%)',
                }}
            />
            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.08] tracking-tight"
                        >
                            Santiago
                            <br />
                            <span className="text-gradient-accent">Chemello</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.12 }}
                            className="text-muted-foreground text-lg sm:text-xl"
                        >
                            <Typewriter
                                text={[
                                    'Computer Engineering Student',
                                    'Full-Stack Developer',
                                    'Open to new opportunities',
                                    'Based in Montevideo, Uruguay',
                                ]}
                                speed={75}
                                deleteSpeed={40}
                                waitTime={2000}
                                cursorChar="_"
                                className="text-primary/80"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-muted-foreground text-base max-w-lg leading-relaxed"
                        >
                            Focused on clean, maintainable code and continuous improvement.
                            <br />
                            I enjoy turning ideas into real-world software. 💻
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-wrap gap-3 pt-2"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-primary/15 active:scale-[0.98]"
                            >
                                Contact Me
                                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                            </a>
                            <div ref={cvRef} className="relative">
                                <button
                                    onClick={() => setCvOpen(!cvOpen)}
                                    className="inline-flex items-center gap-2 border border-border hover:border-muted-foreground text-foreground font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer"
                                >
                                    <FileText size={16} />
                                    View CV
                                </button>
                                <AnimatePresence>
                                    {cvOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[180px] z-20"
                                        >
                                            <a
                                                href="/CV Santiago Chemello.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setCvOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors duration-150 cursor-pointer"
                                            >
                                                <span>Spanish</span>
                                            </a>
                                            <a
                                                href="/Santiago_Chemello_Resume.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setCvOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors duration-150 cursor-pointer border-t border-border"
                                            >
                                                <span>English</span>
                                            </a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <a
                                href="https://github.com/SantiagoChemello"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-11 h-11 border border-border hover:border-muted-foreground text-foreground rounded-full transition-colors duration-200 cursor-pointer"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/santiago-chemello-2b2b86295/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-11 h-11 border border-border hover:border-muted-foreground text-foreground rounded-full transition-colors duration-200 cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <FlipCard className="w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-96 lg:h-[28rem]">
                            <FlipCardFront className="rounded-2xl overflow-hidden border border-border">
                                <img
                                    src="/portrait.jpg"
                                    alt="Santiago Chemello portrait"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                            </FlipCardFront>
                            <FlipCardBack className="rounded-2xl overflow-hidden border border-border bg-white flex items-center justify-center">
                                <img
                                    src="/avatar.png"
                                    alt="Santiago Chemello avatar illustration"
                                    className="w-full h-full object-contain p-4"
                                />
                            </FlipCardBack>
                        </FlipCard>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
            >
                <span className="text-muted-foreground/50 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown size={20} className="text-muted-foreground/40" />
                </motion.div>
            </motion.div>
        </section>
    )
}
