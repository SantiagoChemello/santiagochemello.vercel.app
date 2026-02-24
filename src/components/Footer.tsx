import { ArrowUp } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-6">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} • Built by Santiago Chemello</p>

                    <a
                        href="#home"
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
