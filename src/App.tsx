import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Reviews } from './components/UserReviews';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen">
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
  );
}

export default App;
