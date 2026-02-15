import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const skills = [
        { name: 'React & Next.js', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'CSS3 & Animations', level: 95 },
        { name: 'Responsive Design', level: 98 },
        { name: 'Performance Optimization', level: 90 },
        { name: 'UI/UX Design', level: 85 }
    ];

    const experience = [
        {
            role: 'Frontend Developer',
            company: 'Freelance',
            period: '2024 - Present',
            description: 'Specializing in building premium websites for event and creative agencies across Dubai and India'
        },
        {
            role: 'Key Projects',
            company: 'SEMS Events & BST Events',
            period: '2025',
            description: 'Delivered production-ready platforms with focus on performance, user experience, and conversion optimization'
        }
    ];

    return (
        <div className="about-page">
            <section className="section about-hero">
                <div className="container">
                    <motion.div
                        className="about-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="page-title">
                            About <span className="text-gradient">Me</span>
                        </h1>
                        <p className="page-subtitle">
                            Frontend developer passionate about creating exceptional digital experiences
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section about-content">
                <div className="container">
                    <div className="about-grid">
                        {/* Story */}
                        <motion.div
                            className="about-story glass-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>My Story</h2>
                            <p>
                                I'm a frontend developer specializing in building high-end websites for event and creative agencies.
                                With a focus on premium design aesthetics and performance optimization, I help brands create digital
                                experiences that captivate audiences and drive conversions.
                            </p>
                            <p>
                                My expertise lies in transforming creative visions into pixel-perfect, responsive websites that not
                                only look stunning but also deliver exceptional user experiences. I've successfully collaborated with
                                clients across Dubai and India, delivering production-ready platforms that exceed expectations.
                            </p>
                            <p>
                                Every project is an opportunity to push boundaries, implement cutting-edge technologies, and create
                                something truly remarkable. I believe in the power of clean code, thoughtful design, and strategic
                                implementation to build websites that make a lasting impact.
                            </p>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            className="about-skills glass-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Skills & Expertise</h2>
                            <div className="skills-list">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Experience */}
                    <motion.div
                        className="about-experience"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Experience</h2>
                        <div className="experience-timeline">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="experience-item glass-card"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <div className="experience-period">{exp.period}</div>
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <h4 className="experience-company">{exp.company}</h4>
                                    <p className="experience-description">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
