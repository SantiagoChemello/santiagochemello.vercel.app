import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center w-[72px] h-9 rounded-full bg-card border border-border shadow-sm cursor-pointer transition-colors duration-300"
            aria-label="Toggle theme"
        >
            {/* Sliding pill */}
            <div
                className={`absolute top-0.5 w-8 h-8 rounded-full bg-background border border-border shadow-sm transition-transform duration-300 ease-in-out ${isDark ? 'translate-x-[34px]' : 'translate-x-0.5'
                    }`}
            />
            {/* Sun icon */}
            <div className="relative z-10 flex items-center justify-center w-9 h-9">
                <Sun
                    size={16}
                    className={`transition-colors duration-300 ${!isDark ? 'text-foreground' : 'text-muted-foreground/40'
                        }`}
                />
            </div>
            {/* Moon icon */}
            <div className="relative z-10 flex items-center justify-center w-9 h-9 -ml-1.5">
                <Moon
                    size={16}
                    className={`transition-colors duration-300 ${isDark ? 'text-foreground' : 'text-muted-foreground/40'
                        }`}
                />
            </div>
        </button>
    )
}
