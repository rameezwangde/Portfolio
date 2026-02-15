import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'SEMS Events',
            tagline: 'Complete Event Management Platform',
            description: 'A comprehensive event management system built for a Dubai-based event agency, featuring event booking, payment processing, admin dashboard, and customer management.',
            problem: 'The client needed a full-stack solution to manage their growing event business, replacing manual processes with an automated, scalable platform.',
            solution: 'Developed a React-based frontend with Node.js backend, integrated payment gateway, real-time booking system, and comprehensive admin panel for event and customer management.',
            outcome: 'Successfully deployed and production-ready platform handling multiple concurrent events, streamlined operations, and improved customer experience with 40% faster booking process.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT Auth', 'Material-UI'],
            gradient: 'sems-gradient',
            link: 'https://sems-events-wy1n.vercel.app/',
            year: '2025'
        },
        {
            id: 2,
            name: 'BST Events',
            tagline: 'Premium Creative Agency Website',
            description: 'Modern, high-converting website for a creative event agency with immersive portfolio showcase and service presentation.',
            problem: 'BST Events needed a premium digital presence that matched their high-end brand positioning and effectively showcased their creative event portfolio.',
            solution: 'Designed and developed a visually stunning website with smooth animations, interactive portfolio gallery, and conversion-optimized service pages using React and Framer Motion.',
            outcome: 'Delivered a premium website that elevated brand perception, increased client inquiries by 60%, and provided an immersive showcase of their event portfolio.',
            tech: ['React', 'Framer Motion', 'CSS3', 'Responsive Design', 'Performance Optimization'],
            gradient: 'bst-gradient',
            link: 'https://bst-events.vercel.app/',
            year: '2025'
        }
    ];

    return (
        <div className="projects-page">
            <section className="section projects-hero">
                <div className="container">
                    <motion.div
                        className="projects-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="page-title">
                            Featured <span className="text-gradient">Projects</span>
                        </h1>
                        <p className="page-subtitle">
                            Premium websites and platforms built for event and creative agencies
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section projects-list">
                <div className="container">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            className="project-showcase"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Project Hero */}
                            <div className={`project-hero ${project.gradient}`}>
                                <div className="project-hero-content">
                                    <span className="project-year">{project.year}</span>
                                    <div className="project-logo-wrapper">
                                        <div className={`project-logo-text ${project.id === 1 ? 'sems-logo' : 'bst-logo'}`}>
                                            <span className="logo-main">{project.name.split(' ')[0]}</span>
                                            <span className="logo-sub">{project.name.split(' ')[1]}</span>
                                        </div>
                                    </div>
                                    <p className="project-tagline">{project.tagline}</p>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="project-details glass-card">
                                <p className="project-description">{project.description}</p>

                                {/* Problem → Solution → Outcome */}
                                <div className="project-journey">
                                    <div className="journey-item">
                                        <div className="journey-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <div className="journey-content">
                                            <h4>Problem</h4>
                                            <p>{project.problem}</p>
                                        </div>
                                    </div>

                                    <div className="journey-arrow">→</div>

                                    <div className="journey-item">
                                        <div className="journey-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <div className="journey-content">
                                            <h4>Solution</h4>
                                            <p>{project.solution}</p>
                                        </div>
                                    </div>

                                    <div className="journey-arrow">→</div>

                                    <div className="journey-item">
                                        <div className="journey-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="journey-content">
                                            <h4>Outcome</h4>
                                            <p>{project.outcome}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="project-tech">
                                    <h4 className="tech-title">Tech Stack</h4>
                                    <div className="tech-tags">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Live Link */}
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary project-link"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>View Live Site</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
