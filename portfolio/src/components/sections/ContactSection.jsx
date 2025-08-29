import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, Linkedin, Github, Instagram, Twitter } from 'lucide-react';

export const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/benjamin-gotah-145ba5277"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/benjamingotah"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/bhern_jee/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-50/90 to-gray-100/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            whileHover={{ scale: 1.02 }}
          >
            Let's Connect
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                Email Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ml-7">benjamingotah@gmail.com</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                Call Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ml-7">+ 233 257 441 210</p>
            </div>

            {/* Vertical Social Links with connecting lines */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">
                Follow Me
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 h-full w-px bg-gray-300 dark:bg-gray-600"></div>
                
                <div className="space-y-4 pl-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Circle with icon */}
                      <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                        {social.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/3"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Send Me a Message
              </h3>

              <div className="space-y-6">
                {/* Direct Email Link */}
                <motion.a
                  href="mailto:benjamingotah@gmail.com?subject=Portfolio Inquiry&body=Hi Benjamin,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0ABest regards,"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  Send Email Directly
                </motion.a>

                {/* WhatsApp Link */}
                <motion.a
                  href="https://wa.me/233257441210?text=Hi%20Benjamin,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Message on WhatsApp
                </motion.a>

                {/* LinkedIn Message */}
                <motion.a
                  href="https://www.linkedin.com/in/benjamin-gotah-145ba5277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </motion.a>

                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Choose your preferred way to get in touch:
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Email: benjamingotah@gmail.com | Phone: +233 257 441 210
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;