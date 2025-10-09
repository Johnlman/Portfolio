import {useState, useEffect, useRef} from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
    const observerRef = useRef(null);
    useEffect(() => {
        generateStars();
        if (isDark) generateMeteors();

        // Observe class changes on <html> to toggle meteors when theme changes
        observerRef.current = new MutationObserver((mutations) => {
            for (const m of mutations) {
                if (m.type === 'attributes' && m.attributeName === 'class') {
                    const darkNow = document.documentElement.classList.contains('dark');
                    setIsDark(darkNow);
                    if (darkNow && meteors.length === 0) {
                        generateMeteors();
                    } else if (!darkNow) {
                        setMeteors([]); // clear meteors when entering light mode
                    }
                }
            }
        });
        observerRef.current.observe(document.documentElement, { attributes: true });
        return () => {
            observerRef.current?.disconnect();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);
        const newStars = []
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random()*0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }
        setStars(newStars);
    }
    const generateMeteors = () => {
        const numberOfMeteors = 10;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            // Choose spawn region: top band (full width, top 20%) or left band (left 20%, full height)
            const region = Math.random() < 0.55 ? 'top' : 'left';
            let xPercent; let yPercent;
            if (region === 'top') {
                xPercent = Math.random() * 80;   // anywhere across width
                yPercent = Math.random() * 10;    // top 20%
            } else { // left region
                xPercent = Math.random() * 10;    // leftmost 20%
                yPercent = Math.random() * 80;   // anywhere vertically
            }
            const size = Math.random() * 2 + 1;
            // Angle idea: top spawns travel diagonally down-left, left spawns travel slightly down-right
            const angle = region === 'top' ? 215 : 135; // degrees
            newMeteors.push({
                id: i,
                size,
                x: xPercent,
                y: yPercent,    
                angle,
                // Mostly negative delays so many meteors are already mid-flight on first paint
                delay: (Math.random() < 0.8 ? -Math.random() * 10 : Math.random() * 3),
                animationDuration: Math.random() * 2+5
            });
        }
        setMeteors(newMeteors);
    };
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {isDark && meteors.map((meteor) => (
                        <div
                            key={meteor.id}
                            className="meteor animate-meteor"
                            style={{
                                width: `${meteor.size * Math.random()* 50 +20}px`,
                                height: `${meteor.size * Math.random()* 1.6 +2}px`,
                                left: `${meteor.x}%`,
                                top: `${meteor.y}%`,
                                animationDelay: `${meteor.delay}s`,
                                animationDuration: `${meteor.animationDuration}s`,
                                '--meteor-angle': `${meteor.angle}deg`
                            }}
                        />
                ))}
                {stars.map((star) =>(
                        <div
                            key={star.id}
                            className="star twinkle"
                            style={{
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                '--twinkle-min': (0.1 + Math.random()*0.05).toString(),
                                '--twinkle-max': (0.75 + Math.random()*0.25).toString(),
                                '--twinkle-duration': `${(Math.random()*8 + 6).toFixed(2)}s`,
                            }}
                        />
                ))}
    </div>;
}