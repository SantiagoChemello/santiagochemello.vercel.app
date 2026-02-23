import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-3">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="bg-card border border-border rounded-3xl p-10 md:p-14 text-center"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
                        Ready to bring your ideas to life?
                    </h2>

                    <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                        I'm currently open to new opportunities — full-time roles, freelance
                        projects, or exciting collaborations. Let's build something great
                        together.
                    </p>

                    <a
                        href="mailto:chemello.santiago8@gmail.com"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-xl md:text-2xl font-[family-name:var(--font-heading)] transition-colors duration-200 cursor-pointer group"
                    >
                        <Mail
                            size={24}
                            className="group-hover:scale-110 transition-transform duration-200"
                        />
                        chemello.santiago8@gmail.com
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
