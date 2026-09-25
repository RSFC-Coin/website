import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import TokenInfo from './components/TokenInfo';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Technology from './components/Technology';
import WhyRfs from './components/WhyRfs';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <TokenInfo />
        <Tokenomics />
        <Roadmap />
        <Technology />
        <WhyRfs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
