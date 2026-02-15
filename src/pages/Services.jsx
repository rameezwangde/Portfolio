import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Website Redesign & Overhaul',
            description: 'Transform outdated websites into modern, high-performing digital experiences that align with your brand and business goals.',
            features: [
                'Complete visual redesign',
                'Modern tech stack migration',
                'Brand alignment',
                'Performance optimization'
            ],
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 21V9" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'UI/UX Structuring',
            description: 'Design intuitive, user-centered interfaces that enhance usability and create memorable digital experiences.',
            features: [
                'User research & personas',
                'Information architecture',
                'Wireframing & prototyping',
                'Usability testing'
            ],
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Performance Optimization',
            description: 'Maximize website speed and efficiency to improve user experience, SEO rankings, and conversion rates.',
            features: [
                'Code optimization',
                'Image & asset compression',
                'Lazy loading implementation',
                'Core Web Vitals improvement'
            ],
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'Mobile & Responsive Refinement',
            description: 'Ensure flawless experiences across all devices with responsive design that adapts beautifully to any screen size.',
            features: [
                'Mobile-first approach',
                'Cross-device testing',
                'Touch-optimized interactions',
                'Responsive breakpoints'
            ],
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            id: 5,
            title: 'Conversion-Focused Layout Strategy',
            description: 'Design strategic layouts that guide users toward desired actions and maximize conversion rates.',
            features: [
                'CTA optimization',
                'User flow mapping',
                'A/B testing setup',
                'Analytics integration'
            ],
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <div className="services-page">
            <section className="section services-hero">
                <div className="container">
                    <motion.div
                        className="services-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="page-title">
                            <span className="text-gradient">Services</span> & Expertise
                        </h1>
                        <p className="page-subtitle">
                            Comprehensive frontend development services tailored for event and creative agencies
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section services-grid-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="service-card glass-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section services-cta">
                <div className="container">
                    <motion.div
                        className="cta-card glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Elevate Your Digital Presence?</h2>
                        <p>Let's collaborate to create a premium website that drives results for your business.</p>
                        <motion.a
                            href="/contact"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start a Project
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
