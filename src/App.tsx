import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Reviews } from './components/UserReviews';
import { BackToTop } from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
        <Header />
        <Hero />
        <Services />
        <HowItWorks />
        <Features />
        <Pricing />
        <Reviews />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
