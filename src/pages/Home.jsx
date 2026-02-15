import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    // Particle animation configuration
    const particles = Array.from({ length: 30 }, (_, i) => i);

    return (
        <div className="home">
            {/* Animated Geometric Background */}
            <div className="hero-background">
                {particles.map((particle) => (
                    <motion.div
                        key={particle}
                        className="particle"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            className="hero-badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="badge-dot"></span>
                            Available for Freelance Projects
                        </motion.div>

                        <motion.div
                            className="hero-name"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                        >
                            Hi, I'm <span className="text-gradient">Rameez Wangde</span>
                        </motion.div>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.35 }}
                        >
                            Crafting High-Impact{' '}
                            <span className="text-gradient">Digital Experiences</span>{' '}
                            for Event & Creative Brands
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Specialized in building premium, conversion-focused websites for event agencies
                            and creative studios. Combining exceptional UI/UX clarity with performance
                            optimization to deliver experiences that captivate and convert.
                        </motion.p>

                        <motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Link to="/projects" className="btn btn-primary">
                                <span>View Projects</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Let's Work Together
                            </Link>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div
                            className="hero-stats"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="stat-item">
                                <h3 className="stat-number">2+</h3>
                                <p className="stat-label">Projects Delivered</p>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <h3 className="stat-number">100%</h3>
                                <p className="stat-label">Client Satisfaction</p>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <h3 className="stat-number">Dubai & India</h3>
                                <p className="stat-label">Remote Collaboration</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Work Preview */}
            <section className="section featured-preview">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Featured Work</h2>
                        <p className="section-description">
                            Premium websites built for leading event and creative agencies
                        </p>
                    </motion.div>

                    <div className="featured-grid">
                        <motion.div
                            className="featured-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="featured-image">
                                <div className="project-placeholder sems-gradient">
                                    <div className="project-logo-wrapper">
                                        <div className="project-logo-text sems-logo">
                                            <span className="logo-main">SEMS</span>
                                            <span className="logo-sub">EVENTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-content">
                                <h3>SEMS Events Platform</h3>
                                <p>Complete event management system for Dubai-based agency with booking, payments, and admin dashboard</p>
                                <div className="tech-tags">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Node.js</span>
                                    <span className="tech-tag">MongoDB</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="featured-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="featured-image">
                                <div className="project-placeholder bst-gradient">
                                    <div className="project-logo-wrapper">
                                        <div className="project-logo-text bst-logo">
                                            <span className="logo-main">BST</span>
                                            <span className="logo-sub">EVENTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-content">
                                <h3>BST Events Website</h3>
                                <p>Modern, high-converting website for creative event agency with immersive portfolio showcase</p>
                                <div className="tech-tags">
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Framer Motion</span>
                                    <span className="tech-tag">CSS3</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="view-all-cta"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link to="/projects" className="btn btn-secondary">
                            View All Projects
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
