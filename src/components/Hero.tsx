import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'

export default function Hero() {
    return (
        <section
            id="home"
            className="flex items-center pt-24 pb-3"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left — Text */}
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.05] tracking-tight"
                            >
                                Santiago
                                <br />
                                <span className="text-gradient-orange">Chemello</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.15 }}
                                className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed"
                            >
                                Computer Engineering student &amp; Software Developer based in
                                Montevideo, Uruguay. Focused on clean code, continuous learning,
                                and building quality software.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="flex flex-wrap gap-3 pt-2"
                            >
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer"
                                >
                                    Contact Me
                                    <ArrowRight size={16} />
                                </a>
                                <a
                                    href="/Santiago_Chemello_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-border hover:border-muted-foreground text-foreground font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer"
                                >
                                    <FileText size={16} />
                                    View CV
                                </a>
                            </motion.div>
                        </div>

                        {/* Right — Portrait */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-[22rem] rounded-2xl overflow-hidden border border-border">
                                <img
                                    src="/portrait.jpg"
                                    alt="Santiago Chemello portrait"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Subtle gradient overlay at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
