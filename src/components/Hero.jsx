import './Hero.css'

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__container">
                <h1 className="hero__title">Empowering Care</h1>
                <div className="hero__content">
                    <p className="hero__text">
                        Empowering every ability through intelligent accessibility. A unified platform delivering safe navigation, real-time alerts, AI support, and inclusive community – built for a barrier-free future.
                    </p>
                    <div className="hero__actions">
                        <a href="/profile.html" className="btn-primary hero__cta">Get Started</a>
                        <a href="#contact" className="btn-secondary hero__cta">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="hero__image-wrapper">
                <img src="/images/hero.png" alt="Caregiver helping elderly person" className="hero__image" />
            </div>
        </section>
    )
}

export default Hero
