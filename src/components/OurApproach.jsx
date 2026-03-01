import './OurApproach.css'

const steps = [
    { number: '01', title: 'Personalized Assistance', desc: 'This is the space to highlight the benefits you offer and what clients can gain from choosing your services.' },
    { number: '02', title: 'Professional Support', desc: 'This is the space to highlight the benefits you offer and what clients can gain from choosing your services.' },
    { number: '03', title: 'Client-Centered Focus', desc: 'This is the space to highlight the benefits you offer and what clients can gain from choosing your services.' },
    { number: '04', title: 'Continuous Care', desc: 'This is the space to highlight the benefits you offer and what clients can gain from choosing your services.' }
]

function OurApproach() {
    return (
        <section className="approach" id="approach">
            <div className="approach__image-wrapper">
                <img src="/images/approach.png" alt="Caregiver arriving at home" className="approach__image" />
            </div>
            <div className="approach__content">
                <div className="approach__container">
                    <h2 className="section-title">Our Approach</h2>
                    <p className="approach__subtitle">Compassionate Care</p>
                    <div className="approach__steps">
                        {steps.map((step, index) => (
                            <div className="approach__step" key={index}>
                                <span className="approach__step-number">{step.number}</span>
                                <div className="approach__step-info">
                                    <h3 className="approach__step-title">{step.title}</h3>
                                </div>
                                <p className="approach__step-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurApproach
