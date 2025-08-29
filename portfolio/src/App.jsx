import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import AppLayout from './components/layout/AppLayout';
import HeroSection from './components/sections/HeroSection';
import About from './components/sections/AboutSection';
import Portfolio from './components/sections/PortfolioSection';
import Contact from './components/sections/ContactSection';
import Service from './components/sections/ServiceSection';
import TechStack from './components/sections/TechStack';
import Footer from './components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout>
          <HeroSection />
          <About />
          <Service />
          <Portfolio />
          <Contact />
          <TechStack />
          <Footer />
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;