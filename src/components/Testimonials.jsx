import './Testimonials.css'

const testimonials = [
    {
        name: 'Linda Johnson',
        text: 'Use this space to share a testimonial quote about your business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.',
        stars: 5
    },
    {
        name: 'Robert Smith',
        text: 'Use this space to share a testimonial quote about your business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.',
        stars: 5
    },
    {
        name: 'Emily Davis',
        text: 'Use this space to share a testimonial quote about your business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.',
        stars: 5
    }
]

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials__container">
                <h2 className="section-title">Client Experiences</h2>
                <p className="testimonials__subtitle">
                    Discover how our clients have benefited from our personalized care and support.
                </p>
                <div className="testimonials__grid">
                    {testimonials.map((t, index) => (
                        <div className="testimonials__card" key={index}>
                            <div className="testimonials__stars">
                                {'★'.repeat(t.stars)}
                            </div>
                            <p className="testimonials__text">{t.text}</p>
                            <span className="testimonials__name">{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
