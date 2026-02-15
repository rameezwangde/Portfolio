import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    company: formData.company,
                    message: formData.message,
                    to_name: 'Rameez Wangde',
                },
                publicKey
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.54 13.67 12.46 13.67 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            label: 'Email',
            value: 'rameezwang@gmail.com',
            link: 'mailto:rameezwang@gmail.com'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'linkedin.com/in/rameezwangde',
            link: 'https://linkedin.com/in/rameezwangde'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor" />
                </svg>
            ),
            label: 'GitHub',
            value: 'github.com/rameezwangde',
            link: 'https://github.com/rameezwangde'
        }
    ];

    return (
        <div className="contact-page">
            <section className="section contact-hero">
                <div className="container">
                    <motion.div
                        className="contact-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="page-title">
                            Let's <span className="text-gradient">Work Together</span>
                        </h1>
                        <p className="page-subtitle">
                            Have a project in mind? Let's create something exceptional together.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper glass-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Send a Message</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company (Optional)</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Project Details</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary submit-btn"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        className="submit-message success"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        className="submit-message error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ✗ Failed to send message. Please try again or email me directly.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="contact-info-wrapper"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="contact-info glass-card">
                                <h2>Get in Touch</h2>
                                <p className="contact-intro">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>

                                <div className="contact-methods">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={index}
                                            href={info.link}
                                            className="contact-method"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <div className="contact-icon">{info.icon}</div>
                                            <div className="contact-details">
                                                <span className="contact-label">{info.label}</span>
                                                <span className="contact-value">{info.value}</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="availability-card glass-card">
                                <div className="availability-indicator">
                                    <span className="status-dot"></span>
                                    <span className="status-text">Available for Freelance</span>
                                </div>
                                <p>Currently accepting new projects for Q1 2026</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
