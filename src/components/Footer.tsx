import { Github, Linkedin } from 'lucide-react'

const socials = [
    { label: 'GitHub', icon: Github, href: 'https://github.com/SantiagoChemworker' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/santiago-chemello' },
]

export default function Footer() {
    return (
        <footer className="py-6">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Santiago Chemello. All rights reserved.</p>

                    <div className="flex items-center gap-5">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                            >
                                <s.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
