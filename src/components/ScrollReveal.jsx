import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsRevealed(true);
                    }, delay);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={elementRef}
            className={`reveal-on-scroll ${isRevealed ? 'revealed' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
