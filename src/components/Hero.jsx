import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const scrolled = window.scrollY;
            const img = heroRef.current.querySelector('.hero__image');
            if (img) {
                // 8% parallax shift coupled with scale 1.1 (set in CSS)
                img.style.transform = `translateY(${scrolled * 0.08}px) scale(1.1)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            {/* Background Animations */}
            <div className="hero__blobs">
                <div className="hero__blob hero__blob--1"></div>
                <div className="hero__blob hero__blob--2"></div>
            </div>
            <div className="hero__particles"></div>

            <div className="hero__container" style={{ position: 'relative', zIndex: 10 }}>
                <h1 className="hero__title animate-slide-up" style={{ animationDelay: '0s' }}>Empowering Care</h1>
                <div className="hero__content">
                    <p className="hero__text animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Empowering every ability through intelligent accessibility. A unified platform delivering safe navigation, real-time alerts, AI support, and inclusive community – built for a barrier-free future.
                    </p>
                    <div className="hero__actions animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <a href="/profile.html" className="btn-primary hero__cta">Get Started</a>
                        <a href="#contact" className="btn-secondary hero__cta">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="hero__image-wrapper" style={{ position: 'relative', zIndex: 10 }}>
                <img src="/images/hero.png" alt="Caregiver helping elderly person" className="hero__image" />
            </div>
        </section>
    )
}

export default Hero
