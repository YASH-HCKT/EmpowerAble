import './Partners.css'

const partners = ['Ktilario', 'Flondingo', 'Gamarance', 'LADERATE']

function Partners() {
    return (
        <section className="partners" id="partners">
            <div className="partners__container">
                <h2 className="section-title">Our Partners</h2>
                <div className="partners__grid">
                    {partners.map((name, index) => (
                        <div className="partners__card" key={index}>
                            <span className="partners__name">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partners
