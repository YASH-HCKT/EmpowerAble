import './SpecializedFocus.css'

const focuses = [
    {
        title: 'Independence Through Technology',
        desc: 'We design intelligent systems that enable individuals to navigate, connect, and thrive independently.'
    },
    {
        title: 'Inclusive Infrastructure Awareness',
        desc: 'We bridge the gap between people and physical spaces by highlighting accessibility gaps and solutions in real time.'
    },
    {
        title: 'Community-Driven Empowerment',
        desc: 'We believe empowerment grows stronger when people support each other in safe, inclusive digital environments.'
    }
]

function SpecializedFocus() {
    return (
        <section className="focus" id="focus">
            <div className="focus__container">
                <div className="focus__header">
                    <h2 className="section-title">Specialized Focus</h2>
                    <a href="#contact" className="btn-primary focus__cta">Connect</a>
                </div>
                <div className="focus__grid">
                    {focuses.map((item, index) => (
                        <div className="focus__card" key={index}>
                            <h3 className="focus__card-title">{item.title}</h3>
                            <p className="focus__card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SpecializedFocus
