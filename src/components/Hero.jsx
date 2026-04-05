import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const scrolled = window.scrollY;
            const img = heroRef.current.querySelector('.hero__bg-image');
            if (img) {
                // Subtle parallax effect on the background image
                img.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="hero__bg">
                <div className="hero__bg-image"></div>
                <div className="hero__overlay"></div>
            </div>

            <div className="hero__container">
                <div className="hero__content">
                    <h1 className="hero__title animate-slide-up" style={{ animationDelay: '0s' }}>
                        Empowering Care : Care that moves with you
                    </h1>
                    <p className="hero__text animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Empowering every ability through intelligent support. A unified platform delivering safe navigation, real-time alerts, and an unwavering inclusive community.
                    </p>
                    <div className="hero__actions animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <a href="/profile.html" className="btn-primary hero__cta">Explore Services</a>
                        <a href="#contact" className="btn-primary hero__cta">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
