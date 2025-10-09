import { ArrowDown } from "lucide-react";
import { useEffect, useState } from 'react';

export const HeroSection = () => {
    const [showHint, setShowHint] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            setShowHint(window.scrollY < 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className = "container max-w-4xl mx-auto text-center z-10">
            <div className = "space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className = "opacity-0 animate-fade-in">Hello, I'm </span>
                    <span className = "text-primary opacity-0 animate-fade-in-delay-1">John </span>
                    <span className = "text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Man </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm a fourth-year Computer Science student at UBC, passionate about building software and looking for new opportunities to learn and grow.
                </p>
                <div className = "opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>

            </div>
        </div>
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${showHint ? 'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'}`}>
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}