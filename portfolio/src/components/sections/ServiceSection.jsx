import { motion } from 'framer-motion';
import { Code2, Paintbrush, Layout, Smartphone, Server, Figma } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Service = () => {
  const { darkMode } = useTheme();
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const services = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      description: "Building responsive, accessible, and performant user interfaces with modern technologies.",
      features: [
        "React applications",
        "Javascript integration",
        "State management solutions",
        "Component libraries",
        "Performance optimization"
      ],
      color: "bg-blue-100 dark:bg-blue-900"
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="w-8 h-8" />,
      description: "Creating intuitive user experiences with pixel-perfect interfaces that drive engagement.",
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Interaction design",
        "Design systems",
        "Accessibility compliance"
      ],
      color: "bg-purple-100 dark:bg-purple-900"
    },
    {
      title: "Graphic Design",
      icon: <Paintbrush className="w-8 h-8" />,
      description: "Crafting memorable visual identities that communicate your brand's essence.",
      features: [
        "Brand identity systems",
        "Print & digital assets",
        "Marketing materials",
        "Illustration",
        "Typography systems"
      ],
      color: "bg-green-100 dark:bg-green-900"
    },
    // {
    //   title: "Mobile Development",
    //   icon: <Smartphone className="w-8 h-8" />,
    //   description: "Building cross-platform mobile experiences that users love.",
    //   features: [
    //     "React Native applications",
    //     "iOS & Android development",
    //     "Mobile UI/UX",
    //     "Performance tuning",
    //     "App store deployment"
    //   ],
    //   color: "bg-yellow-100 dark:bg-yellow-900"
    // },
    {
      title: "Backend Integration",
      icon: <Server className="w-8 h-8" />,
      description: "Connecting your frontend to robust backend services and APIs.",
      features: [
        "REST APIs & MongoDB",
        "Authentication systems",
        "Database design",
        "Serverless functions",
        "Third-party integrations"
      ],
      color: "bg-red-100 dark:bg-red-900"
    },
  ];

  return (
    <section id="services" className={`py-20 backdrop-blur-xl ${
      darkMode 
        ? 'bg-gradient-to-r from-gray-900/90 to-gray-800/90' 
        : 'bg-gradient-to-r from-blue-50/90 to-purple-50/90'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            whileHover={{ scale: 1.02 }}
          >
            My Services
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life with precision and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`p-6 ${service.color} text-center`}>
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white dark:bg-gray-800 shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. Get in touch to discuss how I can help bring your ideas to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleContactClick}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;