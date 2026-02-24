import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Copy, Check } from 'lucide-react'

export default function Contact() {
    const [showEmail, setShowEmail] = useState(false)
    const [copied, setCopied] = useState(false)
    const email = 'chemello.santiago8@gmail.com'

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="contact" className="py-3">
            <div className="max-w-6xl mx-auto px-6">
                <div className="border-t border-border mb-10" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="bg-card border border-border rounded-3xl p-8 md:p-10 text-center card-glow"
                >
                    <h2 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] mb-3 text-gradient-accent">
                        Let's Work Together
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                        I'm currently looking for a Junior Software Developer position where I can grow, learn from experienced teams, and contribute to real-world projects.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        If you think I could be a good fit for your team, I'd love to connect.
                    </p>

                    <div className="inline-flex flex-col items-center gap-3">
                        <AnimatePresence mode="wait">
                            {!showEmail ? (
                                <motion.button
                                    key="button"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setShowEmail(true)}
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium text-sm px-7 py-3 rounded-full transition-colors duration-200 cursor-pointer"
                                >
                                    <Mail size={16} />
                                    Email Me
                                </motion.button>
                            ) : (
                                <motion.div
                                    key="email-reveal"
                                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex items-center gap-3 bg-card border border-border rounded-full px-5 py-2.5 shadow-sm"
                                >
                                    <Mail size={16} className="text-primary shrink-0" />
                                    <span className="text-foreground text-sm font-medium font-[family-name:var(--font-mono)]">
                                        {email}
                                    </span>
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-150 cursor-pointer shrink-0"
                                        aria-label="Copy email"
                                    >
                                        {copied ? (
                                            <Check size={14} className="text-green-500" />
                                        ) : (
                                            <Copy size={14} className="text-muted-foreground" />
                                        )}
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
