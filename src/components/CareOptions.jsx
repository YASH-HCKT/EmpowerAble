import './CareOptions.css'

const services = [
    {
        icon: '✺',
        title: 'Smart Accessibility Mapping',
        desc: 'Real-time accessible route guidance with verified information about elevators, ramps, restrooms, and barrier-free infrastructure.'
    },
    {
        icon: '✺',
        title: 'AI Support Companion',
        desc: 'An intelligent assistant providing emotional support, accessibility guidance, and everyday problem-solving assistance.'
    },
    {
        icon: '✺',
        title: 'Inclusive Community Network',
        desc: 'Safe spaces for individuals to connect, share experiences, motivate each other, and grow together.'
    },
    {
        icon: '✺',
        title: 'Real-Time Emergency Assistance',
        desc: 'Quick-access emergency alerts with location sharing and safety notifications for nearby risks'
    }
]

function CareOptions() {
    return (
        <section className="care" id="care">
            <div className="care__container">
                <h2 className="section-title section-title--light">Our Core Services</h2>
                <p className="care__subtitle">
                    Explore our range of personalized services designed to meet your unique needs.
                </p>
                <a href="#about" className="btn-secondary care__btn">About Us</a>
                <div className="care__grid">
                    {services.map((service, index) => (
                        <div className="care__card hover-lift hover-glow" key={index}>
                            <span className="care__card-icon">{service.icon}</span>
                            <h3 className="care__card-title">{service.title}</h3>
                            <p className="care__card-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CareOptions
