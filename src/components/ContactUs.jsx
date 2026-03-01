import { useState } from 'react'
import './ContactUs.css'

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for reaching out! We will get back to you soon.')
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__text">
                    <h2 className="section-title section-title--light">Contact Us</h2>
                    <p className="contact__desc">
                        This is the space to share your business's contact information. Let people know the best ways to get in touch and encourage them to reach out.
                    </p>
                </div>
                <div className="contact__form-wrapper">
                    <h3 className="contact__form-title">
                        Reach Out to Empower<span className="contact__form-bold">Able</span>
                    </h3>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__field">
                            <label htmlFor="firstName">First name *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="lastName">Last name *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact__field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-secondary contact__submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
