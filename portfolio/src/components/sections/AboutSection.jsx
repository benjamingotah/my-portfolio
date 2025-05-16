import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  BookOpen, 
  Briefcase,
  ExternalLink
} from 'lucide-react';
import profile from "../../assets/profile.jpg";
import nodejs from "../../assets/nodejs.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import tailwind from "../../assets/tailwind.png";
import chakra from "../../assets/chakra.png";
import ps from "../../assets/ps.png";
import git from "../../assets/git.png";
import pospadi from "../../assets/pos.png"; 
import internpulse from "../../assets/internpulse.jpeg"; 
import scholar from "../../assets/scholar.png"; 
import free from "../../assets/free.png";
import ben from "../../assets/ben.jpg"; 
import bank from "../../assets/bank.png"; 

export const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Animation values for the profile picture
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const education = [
    {
       year: "April-December 2024",
    degree: "Full-Stack Software Engineering",
    institution: "IBT Learning",
    certificate: "https://learn.ibtlearning.africa/certificates/frek9juyki",
    description: [
      "Mastered the MERN (MongoDB, Express.js, React, Node.js) stack through hands-on projects and structured coursework.",
      "Developed proficiency in modern web technologies including React, JavaScript (ES6+), and responsive web design.",
      "Completed practical assignments and small-scale projects to reinforce core concepts and best practices in software development.",
      "Gained experience in building full-stack applications with RESTful APIs, state management, and database integration."
    ]
    },
    {
      year: "2024 - present",
      degree: "BSc Computer Science",
      institution: "Kwame Nkrumah University of Science and Technology",
      description:  "Currently studying core computer science principles, including software development, data structures, and system architecture, to formalize and expand my technical expertise."
    }
  ];

  const experience = [
    {
      year: "Mar 2025 - May 2025",
      role: "Frontend Engineer",
      company: "InternPulse",
      logo: internpulse,
      description: [
       "Collaborated with cross-functional teams including product designers, backend engineers, and PMs to develop POS-Padi, a fintech solution for Nigerian POS operators that streamlines transactions, balance tracking, and bill payments.",
    "Implemented responsive UI components from Figma designs and integrated RESTful APIs to fetch and display real-time financial data.",
    "Conducted thorough code reviews and debugging sessions with team members to maintain code quality and optimize application performance.",
    "Developed a comprehensive freelancer dashboard with Chakra UI and React, featuring expense tracking, project analytics, and client management functionalities.",
    "Built a personal portfolio website using React, JavaScript, and Tailwind CSS to showcase technical skills and projects."
      ],
      projects: [
        {
          name: "POS-Padi",
          description: "Agent-friendly fintech solution for Nigerian POS operators",
          link: "https://pospadi.com.ng",
          image: pospadi
        },
        {
          name: "Bank-Dash",
          description: "Implemented a bank dashboard figma design with team",
          link: "https://bankdash-team-2025.netlify.app/",
          image: bank
        },
        {
          name: "Freelancer Dashboard",
          description: "Expense tracking and project management dashboard",
          link: "https://super-medovik-320efa.netlify.app/",
          image: free
        },
      ],
      skills: ["React", "Chakra UI", "Tailwind CSS", "Teamwork", "Git"],
      type: "Internship",
      location: "Remote"
    },
    {
      year: "Jul 2023 - Present",
      role: "Lead Graphic Designer",
      company: "Scholar Opportunity Nexus",
      logo: scholar,
      description: "Designing visually appealing flyers and social media graphics for educational programs and events.",
      skills: ["Flyer Design", "Graphic Design", "Social Media Graphics"],
      type: "Part-time"
    },
    {
      year: "Mar 2023 - Present",
      role: "Freelance Graphic Designer",
      company: "Bhernjee Graphics",
      logo: ben,
      description: "Creating aesthetic designs for various businesses including branding, marketing materials, and social media content.",
      skills: ["Adobe Photoshop", "Flyer Design", "Brand Identity", "Social Media Graphics"],
      type: "Part-time",
      
    },
  
  ];

  const skills = [
    { name: "JavaScript", icon: js, level: 65 },
    { name: "React", icon: react, level: 65 },
    { name: "Git", icon: git, level: 80 },
    { name: "Tailwind", icon: tailwind, level: 70 },
    { name: "Photoshop", icon: ps, level: 100 },
    { name: "Chakra UI", icon: chakra, level: 65 },
    { name: "Node.js", icon: nodejs, level: 60 },
    { name: "HTML", icon: html, level: 95 }
  ];

  // Pie chart component with dynamic colors
  const PieChart = ({ percentage, size = 40 }) => {
    // Determine color based on skill level
    let color;
    if (percentage >= 85) {
      color = "#10B981"; // Emerald green for high skills
    } else if (percentage >= 70) {
      color = "#3B82F6"; // Blue for medium-high skills
    } else {
      color = "#F59E0B"; // Amber orange for lower skills
    }

    const radius = size / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={radius}
            cy={radius}
            r={radius - 2}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
          />
          <circle
            cx={radius}
            cy={radius}
            r={radius - 2}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-bold">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Dynamic Image Section */}
          <motion.div 
            className="w-full lg:w-1/3 flex justify-center"
            style={{
              y,
              rotate,
              scale
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div 
                className="absolute inset-0 border-2 border-blue-400 rounded-3xl"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <motion.img 
                  src={profile} 
                  alt="Benjamin Gotah" 
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3">
            {/* Navigation Tabs */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'about' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'skills' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'experience' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Experience
                </span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'education' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Education
                </span>
              </button>
            </motion.div>

            {/* About Content */}
            {activeTab === 'about' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I build scalable web applications with clean, maintainable code and strong foundations in data structures and algorithms. Through coursework and projects, I've honed my ability to transform designs into responsive UIs and integrate RESTful APIs. I thrive in collaborative environments where I can contribute both technical skills and problem-solving abilities. I'm passionate about continuous learning and staying current with emerging technologies. 
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, I channel that same meticulous approach into building clean, efficient, and accessible web applications. I specialize in creating intuitive user interfaces with React and TypeScript, always with a focus on performance and maintainability.
                </p>
              </motion.div>
            )}

            {/* Skills Content */}
            {activeTab === 'skills' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                  My Tech Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-500"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-100 rounded-full flex items-center justify-center">
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-800 dark:text-white truncate">
                            {skill.name}
                          </h4>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Progress
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <PieChart percentage={skill.level} />
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400 w-8 text-right">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Experience Content */}
            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                  Professional Journey
                </h3>
                <div className="space-y-8 relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-400 dark:bg-blue-600"></div>
                  
                  {experience.map((exp, index) => (
                    <motion.div 
                      key={index} 
                      className="relative pl-12"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center">
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={exp.company}
                            className="w-6 h-6 object-contain rounded-full"
                          />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-100"></div>
                        )}
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.year}</span>
                            <h5 className="text-lg font-semibold mt-1 text-gray-800 dark:text-white">{exp.role}</h5>
                            <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                              {exp.company}
                              {exp.type && <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">· {exp.type}</span>}
                              {exp.location && <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">· {exp.location}</span>}
                            </p>
                          </div>
                        </div>

                        {Array.isArray(exp.description) ? (
                          <ul className="list-disc pl-5 mb-4 text-gray-500 dark:text-gray-400 space-y-2">
                            {exp.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.description}</p>
                        )}

                        {/* Projects section for InternPulse */}
                        {exp.projects && (
                          <div className="mt-4 space-y-4">
                            <h6 className="font-medium text-gray-700 dark:text-gray-300">Key Projects:</h6>
                            {exp.projects.map((project, i) => (
                              <div key={i} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <div className="flex items-start gap-4">
                                  {project.image && (
                                    <img 
                                      src={project.image} 
                                      alt={project.name}
                                      className="w-16 h-16 object-contain rounded-lg"
                                    />
                                  )}
                                  <div>
                                    <h6 className="font-medium text-gray-800 dark:text-white">{project.name}</h6>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                                    {project.link && (
                                      <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 mt-1"
                                      >
                                        <ExternalLink className="w-3 h-3" /> View Project
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Skills chips */}
                        {exp.skills && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.skills.map((skill, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Education Content */}
            {activeTab === 'education' && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
      Education Background
    </h3>
    <div className="space-y-8 relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-400 dark:bg-blue-600"></div>
      
      {education.map((edu, index) => (
        <motion.div 
          key={index} 
          className="relative pl-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-100"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <span className="text-blue-600 dark:text-blue-400 font-medium">{edu.year}</span>
            <h5 className="text-lg font-semibold mt-1 text-gray-800 dark:text-white">{edu.degree}</h5>
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{edu.institution}</p>
            
            {Array.isArray(edu.description) ? (
              <ul className="list-disc pl-5 mb-4 text-gray-500 dark:text-gray-400 space-y-2">
                {edu.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 mb-4">{edu.description}</p>
            )}
            
            {edu.certificate && (
              <a 
                href={edu.certificate} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 mt-2"
              >
                <ExternalLink className="w-4 h-4" /> View Certificate
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;