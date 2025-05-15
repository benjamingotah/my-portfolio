import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import AppLayout from './components/layout/AppLayout';
import HeroSection from './components/sections/HeroSection';
import About from './components/sections/AboutSection';
import Portfolio from './components/sections/PortfolioSection';
import Contact from './components/sections/ContactSection';
import Service from './components/sections/ServiceSection';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HeroSection />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
          
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;