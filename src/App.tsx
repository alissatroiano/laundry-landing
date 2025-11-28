import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Steps } from './components/Steps';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Reviews } from './components/UserReviews';
import { BackToTop } from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light dark:bg-slate-950 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Services />
        <Steps />
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
