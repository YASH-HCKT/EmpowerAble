import './EnhancingLives.css'

const stats = [
    { value: '$50M+', label: 'Client Satisfaction' },
    { value: '+80%', label: 'Client Well-being' },
    { value: '100', label: 'Trusted Caregivers' },
    { value: '15', label: 'Years of Caring Experience' }
]

function EnhancingLives() {
    return (
        <section className="stats" id="stats">
            <div className="stats__container">
                <h2 className="section-title section-title--light stats__title">Enhancing Lives</h2>
                <div className="stats__grid">
                    {stats.map((stat, index) => (
                        <div className="stats__item" key={index}>
                            <span className="stats__value">{stat.value}</span>
                            <span className="stats__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EnhancingLives
