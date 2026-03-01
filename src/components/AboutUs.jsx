import './AboutUs.css'

function AboutUs() {
    return (
        <section className="about" id="about">
            <div className="about__container">
                <div className="about__text">
                    <h2 className="section-title">About Us</h2>
                    <p className="about__subtitle">
                        Discover how we are making a difference in the home healthcare industry.
                    </p>
                    <div className="about__body">
                        <p>At EmpowerAble, we believe ability should never be limited by barriers.</p>
                        <p>We are building an intelligent accessibility ecosystem that empowers individuals of every ability to move freely, stay safe, and connect confidently in the world around them. By integrating smart navigation, real-time emergency alerts, AI-driven assistance, and inclusive community support, EmpowerAble transforms accessibility from a challenge into an opportunity.</p>
                        <p>Our mission is simple:</p>
                        <p>To replace limitations with possibilities through technology.</p>
                        <p>We are not just creating a platform — we are redefining how cities, communities, and digital spaces adapt to people, not the other way around.</p>
                        <p>Because empowerment begins with access.</p>
                        <p>And access creates independence.</p>
                    </div>
                    <a href="#about" className="btn-primary about__btn">About Us</a>
                </div>
                <div className="about__image-wrapper">
                    <img src="/images/about.png" alt="Elderly couple using technology" className="about__image" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs
