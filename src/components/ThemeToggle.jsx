import {useState, useEffect} from "react";
import {Moon, Sun} from "lucide-react";
import {cn} from "@/lib/utils";
export const ThemeToggle = ({ inline = false }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (!stored) {
            // Default to dark on first load
            document.documentElement.classList.add('dark');
            document.documentElement.style.colorScheme = 'dark';
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
            return;
        }
        const isDark = stored === 'dark';
        document.documentElement.classList.toggle('dark', isDark);
        document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
        setIsDarkMode(isDark);
    }, []);
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.colorScheme = 'light';
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.style.colorScheme = 'dark';
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }
    const base = "p-2 rounded-full transition-colors duration-300 focus:outline-hidden flex items-center justify-center";
    const inlineClasses = "hidden md:inline-flex"; // show inline on md+
    const fixedClasses = "fixed max-sm:hidden top-5 right-5 z-50"; // original

    return (
        <button
            onClick={toggleTheme}
            className={cn(inline ? `${base} ${inlineClasses}` : `${fixedClasses} ${base}`)}
            aria-pressed={isDarkMode}
            aria-label="Toggle color theme"
        >
            {isDarkMode ? <Sun className="h-6 text-yellow-300" /> : <Moon className="h-6 text-blue-900" />}
        </button>
    );

}